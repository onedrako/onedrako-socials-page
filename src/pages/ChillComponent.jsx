import React from 'react'
import Modal from 'react-modal'

import { PrincipalSection } from './PrincipalSection'
import { SectionContainer } from '../components/Chill/sectionContainer'
import { GameDayCard } from '../components/Chill/GameDayCard'
import { SchedulesContainer } from '../components/Chill/SchedulesContainer'
import { GameCardContainer } from '../components/Chill/GameCardContainer'
import { GameCard } from '../components/Chill/GameCard'
import { ModalInfo } from '../components/Chill/ModalInfo'

import { AboutButton } from './../styles/Chill/PrincipalSection'

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
  // let subtitle
  const [infoModal, setInfoModal] = React.useState(false)

  const closeModal = () => {
    setInfoModal(!infoModal)
  }

  const openModal = () => {
    setInfoModal(!infoModal)
  }

  // const afterOpenModal = () => {
  //   subtitle.style.color = '#f00'
  // }

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

      <SectionContainer title='Calendario Semanal'>
        <GameDayCard />
        {/* <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard /> */}
      </SectionContainer>

      <SectionContainer title='Horarios'>
        <SchedulesContainer />
      </SectionContainer>

      <SectionContainer title='Juegos y Eventos'>
        <h3>Disponibles</h3>
        <GameCardContainer>
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />
          <GameCard available />

        </GameCardContainer>

        <h3>No disponibles por el momento pero que hemos jugado</h3>
        <GameCardContainer>
          <GameCard available={false} />
        </GameCardContainer>

      </SectionContainer>
    </main>
  )
}

export { ChillComponent }
