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

import { gameDayData } from './../../dataExample/gameDayData'

import { detectTimeZoneForSchedules } from '../utils/detectTimeZoneForSchedules'
import { defineToday } from '../utils/defineToday'

const schedulesAPI = `http://localhost:3000/api/v1/schedules/${detectTimeZoneForSchedules()}`

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
  const [infoModal, setInfoModal] = React.useState(false)
  const [scheduleInfo, setScheduleInfo] = React.useState([])

  const closeModal = () => {
    setInfoModal(!infoModal)
  }

  const openModal = () => {
    setInfoModal(!infoModal)
  }

  const orderByDate = () => {
    return gameDayData.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  }

  useEffect(async () => {
    const response = await axios(schedulesAPI)
    setScheduleInfo(await response.data)
    console.log(response.data)
  }, [])

  const today = defineToday(gameDayData)
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()
  const initialStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.initialTime}`)
  const initialTimeForUserCountry = initialStreamSchedule.toLocaleTimeString('es-ES', { timeZone: `${userTimeZone.timeZone}` })
  const dateToCountDown = new Date(`${today[0].date.substring(0, 10)}T${initialTimeForUserCountry}`)

  return (
    <main>
      <PrincipalSection>
        <AboutButton onClick={() => openModal()}>?</AboutButton>
      </PrincipalSection>

      <Modal
        isOpen={infoModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById('root')}
        contentLabel='Example Modal'
      >
        <ModalInfo />
      </Modal>

      <SectionContainer>
        <NextStreamDiv>
          <h2>Siguiente Stream en:</h2>
          <Countdown date={dateToCountDown} />
        </NextStreamDiv>
      </SectionContainer>

      <SectionContainer title='Calendario Semanal'>
        <GameSchedulesContainer>
          {orderByDate().map((gameDay, index) => (
            <GameDayCard gameDay={gameDay} key={gameDay.id} initialTime={scheduleInfo.initialTime} endTime={scheduleInfo.endTime} />
          ))}
        </GameSchedulesContainer>
      </SectionContainer>

      <SectionContainer title='Horario regular'>
        <SchedulesContainer flagsInfo={scheduleInfo && scheduleInfo.countries} />
      </SectionContainer>

      <SectionContainer title='Juegos y Eventos'>
        <h3>Disponibles</h3>
        <GameCardContainer>
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />

        </GameCardContainer>

        <h3>No disponibles por el momento pero que hemos jugado</h3>
        <GameCardContainer>
          <GameCard available={false} />
          <GameCard available={false} />
          <GameCard available={false} />
          <GameCard available={false} />
          <GameCard available={false} />
          <GameCard available={false} />
          <GameCard available={false} />

        </GameCardContainer>

      </SectionContainer>
    </main>
  )
}

export { ChillComponent }
