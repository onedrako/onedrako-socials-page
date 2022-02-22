import React, { useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import Countdown from 'react-countdown'

import { PrincipalSection } from './PrincipalSection'
import { SectionContainer } from '../components/Chill/sectionContainer'
import { GameDayCard } from '../components/Chill/GameDayCard'
import { SchedulesContainer } from '../components/Chill/SchedulesContainer'
import { GameCardContainer } from '../components/Chill/GameCardContainer'
import { GameCard } from '../components/Chill/GameCard'
import { ModalInfo } from '../components/Chill/ModalInfo'

import { AboutButton } from './../styles/Chill/PrincipalSection'
import { GameSchedulesContainer } from './../styles/Chill/GameCardDay'
import { NextStreamDiv } from '../styles/Chill/ScheduleSection'

import { detectTimeZoneForSchedules } from '../utils/detectTimeZoneForSchedules'
import { defineTimesForChillSection } from '../utils/defineTimesForChillSection'

const prod = 'https://floating-brushlands-65510.herokuapp.com/api/v1'
const dev = 'http://localhost:3000/api/v1/'

const schedulesAPI = `${prod || dev}/schedules/${detectTimeZoneForSchedules()}`
const gamesAPI = `${prod || dev}/games`
const gameDaysApi = `${prod || dev}/gameDays`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#171717',
    width: '80%',
    height: '80%'

  },
  overlay: {
    position: 'fixed',
    zIndex: '3',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
}

const ChillComponent = () => {
  const [gameDayData, setGameDayData] = React.useState([])
  const [scheduleInfo, setScheduleInfo] = React.useState([])
  const [gamesInfo, setGamesInfo] = React.useState([])

  const [infoModal, setInfoModal] = React.useState(false)
  const [modalGameCardInfo, setModalGameCardInfo] = React.useState({})

  const [time, setTime] = React.useState({})

  const [loading, setLoading] = React.useState(false)

  const closeModal = () => {
    setInfoModal(!infoModal)
  }

  const openModal = () => {
    setInfoModal(!infoModal)
  }

  const pushInfoToCardModal = (id, pattern) => {
    let gameModalId

    const gamesInOrderOfAvailability = [
      ...gamesInfo.filter(game => { return game.available === true }),
      ...gamesInfo.filter(game => { return game.available === false })
    ]

    if (!pattern) {
      gameModalId = gamesInOrderOfAvailability.filter(game => { return game.id === id })[0]
      setModalGameCardInfo(gameModalId)
      return
    }

    const indexOfActualGame = gamesInOrderOfAvailability.indexOf(gamesInOrderOfAvailability.find(game => game.id === id))

    const min = 0
    const max = gamesInOrderOfAvailability.length - 1

    if (pattern === 'next') {
      gameModalId = indexOfActualGame + 1
    } else if (pattern === 'previous') {
      gameModalId = indexOfActualGame - 1
    }

    if (gameModalId < min) {
      gameModalId = max
    } else if (gameModalId > max) {
      gameModalId = min
    }

    setModalGameCardInfo(gamesInOrderOfAvailability[gameModalId])
  }

  useEffect(() => {
    axios.get(schedulesAPI).then(response => {
      setScheduleInfo(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get(gamesAPI).then(response => {
      setGamesInfo(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get(gameDaysApi).then(response => {
      setGameDayData(response.data.filter(gameDay => { return gameDay.schedule }))
      setTime(defineTimesForChillSection(response.data.filter(gameDay => { return gameDay.schedule })))
      setLoading(true)
    })
  }, [])

  const orderByDate = () => {
    return gameDayData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  }

  return (
    <main>
      <PrincipalSection>
        <AboutButton onClick={() => openModal()}>?</AboutButton>
      </PrincipalSection>

      <Modal
        isOpen={infoModal}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById('root')}
        contentLabel='Example Modal'
      >
        <ModalInfo />
      </Modal>
      {!loading
        ? <p style={{ textAlign: 'center' }}>Cargando los datos, espere por favor, Gabito y Lola Catalina están peleando con un santo buggazo...</p>
        : <>
          <SectionContainer>
            <NextStreamDiv>
              <h2>Siguiente Stream en:</h2>
              {!time.dateToCountDown ? <p>Cargando...</p> : <Countdown date={new Date(time.dateToCountDown)} />}
            </NextStreamDiv>
          </SectionContainer>

          <SectionContainer title='Horario del siguiente stream'>
            {(!time.initialStreamSchedule ?? !time.endStreamSchedule)
              ? <p>Cargando...</p>
              : <SchedulesContainer flagsInfo={scheduleInfo && scheduleInfo.countries} initialTime={time.initialStreamSchedule} endTime={time.endStreamSchedule} timeZone={time.userTimeZone} />}

          </SectionContainer>

          <SectionContainer title='Calendario Semanal'>
            <GameSchedulesContainer>
              {orderByDate().map((gameDay, index) => (
                <GameDayCard gameDay={gameDay} key={gameDay.id} timezone={time.userTimeZone} />
              ))}
            </GameSchedulesContainer>
          </SectionContainer>

          <SectionContainer title='Juegos y Eventos'>
            <h3>Disponibles</h3>
            <GameCardContainer>
              {!gamesInfo
                ? null
                : gamesInfo.filter(game => game.available === true).sort((a, b) => { return a.id - b.id }).map(game =>
                  <GameCard key={game.id} data={game} pushInfo={pushInfoToCardModal} modalInfo={modalGameCardInfo} />)}
            </GameCardContainer>

            <h3>No disponibles por el momento pero que hemos jugado</h3>
            <GameCardContainer>
              {!gamesInfo
                ? null
                : gamesInfo.filter(game => game.available === false).sort((a, b) => { return a.id - b.id }).map(game =>
                  <GameCard key={game.id} data={game} pushInfo={pushInfoToCardModal} modalInfo={modalGameCardInfo} />)}

            </GameCardContainer>

          </SectionContainer>
          </>}
    </main>
  )
}

export { ChillComponent }
