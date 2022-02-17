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
  const data = props.data

  const closeModal = () => {
    setGameCardModal(!GameCardModal)
  }

  const openModal = async () => {
    await props.pushInfo(data.id)
    setGameCardModal(!GameCardModal)
  }

  if (!data) {
    return null
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
        <ModalGameCard info={props.modalInfo} />

      </Modal>

      <FrontCard available={data.available} onClick={() => openModal()}>
        <img src={data.boxImage} />
      </FrontCard>

      <BackCard onClick={() => openModal()}>
        <p>{data.name}</p>
        <div>
          {data.platforms.map(platform => (
            <img src={platform.img} key={platform.id} />
          ))}
        </div>
        <p>Click mas información</p>
        <FiMousePointer />
      </BackCard>
    </BackFaceContainer>
  )
}

export { GameCard }
