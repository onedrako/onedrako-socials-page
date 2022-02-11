import React from 'react'
import { BackFaceContainer, FrontCard, BackCard } from '../../styles/Chill/GameCards'
import { FiMousePointer } from 'react-icons/fi'

const GameCard = (props) => {
  return (
    <BackFaceContainer>
      <FrontCard available={props.available}>
        <img src='https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg' />
      </FrontCard>

      <BackCard>
        <p>Mario Kart 8</p>
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
