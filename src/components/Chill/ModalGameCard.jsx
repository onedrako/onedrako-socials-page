import React from 'react'
import { ModalStructure, LeftArrow, RightArrow, GameImageSection, PlatformSection } from '../../styles/Chill/Modal'

const ModalGameCard = () => {
  return (
    <ModalStructure>
      <h2>Mario Kart 8</h2>
      <GameImageSection>
        <img src='https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg' alt='' />
        <LeftArrow />
        <RightArrow />
      </GameImageSection>
      <h3>¿Que hacemos en este juego?</h3>
      <p>Jugando desde que salio este hermoso juego, en este si me defiendo</p>
      <PlatformSection>
        <h3>Plataformas</h3>
        <div>
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
          <img src='https://1000marcas.net/wp-content/uploads/2020/02/logo-Wii-U.png' alt='' />
        </div>
      </PlatformSection>
      <h3>Dias que se jugara esta semana</h3>
      <div>
        <p>Lunes</p>
        <p>Lunes</p>
        <p>Lunes</p>

      </div>
      <h3>Patrocinadores</h3>
      <p>Aun no hay patrocinadores para este juego esta re disponible para pagarlo</p>
    </ModalStructure>
  )
}

export { ModalGameCard }
