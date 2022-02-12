import React from 'react'
import Modal, { subtitle } from 'react-modal'
import { ModalSponsor } from './ModalSponsor'

import { GameDayCardContainer, CardContainer, MainInfoContainer, SponsorIcon, ExtraInfo } from '../../styles/Chill/GameCardDay'

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

const GameDayCard = () => {
  const [extraInfo, setExtraInfo] = React.useState(false)
  const [sponsorModal, setSponsorModal] = React.useState(false)

  const closeModal = () => {
    setSponsorModal(!sponsorModal)
  }

  const openModal = () => {
    setSponsorModal(!sponsorModal)
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00'
  }

  return (
    <>
      <Modal
        isOpen={sponsorModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById('root')}
        contentLabel='Example Modal'
      >
        <ModalSponsor />
      </Modal>

      <GameDayCardContainer>
        <CardContainer>
          <img onClick={() => setExtraInfo(!extraInfo)} src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg' />
          <MainInfoContainer>
            <h3>Lunes 10 de febrero</h3>
            <div>
              <span onClick={() => openModal()}>
                <SponsorIcon />
              </span>
              <h3>Pitzi</h3>
            </div>
          </MainInfoContainer>
        </CardContainer>

        {extraInfo
          ? <ExtraInfo>
            <h2>Mario Kart 8</h2>
            <p>Jugando desde que salio este hermoso juego, en este si me defiendo</p>

            <div>
              <p>Plataformas: </p>
              <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
            </div>

            <p>Inicia: 19:30</p>
            <p>Termina: 21:30</p>

            </ExtraInfo>

          : null}

      </GameDayCardContainer>
    </>
  )
}

export { GameDayCard }
