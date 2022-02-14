import React from 'react'
import Modal from 'react-modal'
import { ModalSponsor } from './ModalSponsor'
import { PlatformsDiv } from './platformsDiv'

import { GameDayCardContainer, CardContainer, MainInfoContainer, SponsorIcon, ExtraInfo } from '../../styles/Chill/GameCardDay'

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

  console.log(gameDay)

  const date = new Date(gameDay.date)
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  const result = date.toLocaleDateString('es-ES', options)

  const status = defineStatus(gameDay.state, gameDay.date)

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
        <CardContainer status={status}>
          <img onClick={() => setExtraInfo(!extraInfo)} src={gameDay.game.largeImage} alt={`Imagen de ${gameDay.game.name}`} />
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
          ? <ExtraInfo>
            <h2>{gameDay.game.name}</h2>
            <p>{gameDay.game.description}</p>

            <div>
              <h3>Plataformas: </h3>
              {gameDay.game.platforms.map((platform, index) => (
                <PlatformsDiv key={index} img={platform.img} name={platform.name} />
              ))}
            </div>

            <h3>Horario: </h3>
            <p>Inicia: 19:30</p>
            <p>Termina: 21:30</p>

            </ExtraInfo> //eslint-disable-line

          : null}

      </GameDayCardContainer>
    </>
  )
}

export { GameDayCard }
