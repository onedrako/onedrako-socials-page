import React from 'react'
import { BackFaceContainer, FrontCard, BackCard } from '../../styles/Chill/GameCards'
import { FiMousePointer } from 'react-icons/fi'
import Modal from 'react-modal'
import { ModalGameCard } from './ModalGameCard'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#171717',
    width: '70%',
    height: '60%'

  },
  overlay: {
    position: 'fixed',
    zIndex: '3',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
}

const GameCard = (props) => {
  const [GameCardModal, setGameCardModal] = React.useState(false)

  const closeModal = () => {
    setGameCardModal(!GameCardModal)
  }

  const openModal = () => {
    setGameCardModal(!GameCardModal)
  }

  return (
    <BackFaceContainer>

      <Modal
        isOpen={GameCardModal}
        onRequestClose={closeModal}
        style={customStyles}
        appElement={document.getElementById('root')}
        contentLabel='Example Modal'
      >
        <ModalGameCard />

      </Modal>

      <FrontCard available={props.available} onClick={() => openModal()}>
        <img src={props.boxImage} />
      </FrontCard>

      <BackCard onClick={() => openModal()}>
        <p>{props.name}</p>
        <div>
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
        </div>
        <p>Click mas información</p>
        <FiMousePointer />
      </BackCard>
    </BackFaceContainer>
  )
}

export { GameCard }
