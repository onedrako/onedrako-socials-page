import React from 'react'
import Modal from 'react-modal'
import { ModalSponsor } from './ModalSponsor'
import { PlatformsDiv } from './platformsDiv'

import { GameDayCardContainer, CardContainer, MainInfoContainer, SpecialEventP, SponsorIcon, ExtraInfo } from '../../styles/Chill/GameCardDay'

import { defineStatus } from '../../utils/defineStatus'

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

const GameDayCard = ({ gameDay }) => {
  const [extraInfo, setExtraInfo] = React.useState(false)
  const [sponsorModal, setSponsorModal] = React.useState(false)

  const closeModal = () => {
    setSponsorModal(!sponsorModal)
  }

  const openModal = () => {
    setSponsorModal(!sponsorModal)
  }
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()

  const date = new Date(`${gameDay.date.substring(0, 10)}T${gameDay.schedule.initialTime}`)
  const options = { weekday: 'short', month: 'short', day: 'numeric', timezone: userTimeZone.timeZone }
  const result = date.toLocaleDateString('es-ES', options)

  const status = defineStatus(gameDay.state, gameDay.date)

  const initialStreamSchedule = new Date(`${gameDay.date.substring(0, 10)}T${gameDay.schedule.initialTime}`)
  const endStreamSchedule = new Date(`${gameDay.date.substring(0, 10)}T${gameDay.schedule.endTime}`)

  const initialTimeForUserCountry = initialStreamSchedule.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: userTimeZone.timeZone })
  const endTimeForUserCountry = endStreamSchedule.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: userTimeZone.timeZone })

  return (
    <>
      <Modal
        isOpen={sponsorModal}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById('root')}
        contentLabel='Example Modal'
      >
        <ModalSponsor />
      </Modal>

      <GameDayCardContainer>
        <CardContainer status={status} shortName={gameDay.shortName}>
          <img onClick={() => setExtraInfo(!extraInfo)} src={gameDay.game.largeImage} alt={`Imagen de ${gameDay.game.name}`} />
          {gameDay.shortName === 'ESP' ? <SpecialEventP>EVENTO ESPECIAL</SpecialEventP> : null}
          <MainInfoContainer>
            <h3>{result}</h3>
            <div>
              <span onClick={() => openModal()}>
                <SponsorIcon sponsor={gameDay.sponsor} />
              </span>
              {gameDay.sponsor ? <h3>{gameDay.sponsor}</h3> : <h3>---</h3>}
            </div>
          </MainInfoContainer>
        </CardContainer>

        {extraInfo
          ? <ExtraInfo shortName={gameDay.shortName}>
            <h2>{gameDay.game.name}</h2>
            <p>{gameDay.game.description}</p>

            <div>
              <h3>Plataformas donde juego: </h3>
              {gameDay.game.platforms.map((platform, index) => (
                <PlatformsDiv key={index} img={platform.img} name={platform.name} />
              ))}
            </div>

            <h3>Horario: </h3>
            <p>Inicia: {initialTimeForUserCountry} </p>
            <p>Termina: {endTimeForUserCountry}</p>

            </ExtraInfo> //eslint-disable-line

          : null}

      </GameDayCardContainer>
    </>
  )
}

export { GameDayCard }
