import React from 'react'
import { ModalStructure, LeftArrow, RightArrow, GameImageSection, PlatformSection } from '../../styles/Chill/Modal'

const ModalGameCard = ({ info }) => {
  const formatDate = (dateToConvert) => {
    const date = new Date(dateToConvert)
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  return (
    <ModalStructure>
      <h2>{info.name}</h2>
      <GameImageSection>
        <img src={info.boxImage} alt={info.name} />
        <LeftArrow />
        <RightArrow />
      </GameImageSection>
      <h3>¿Que hacemos en este juego?</h3>
      <p>{info.description}</p>
      <PlatformSection>
        <h3>Plataformas</h3>

        {info.platforms.map(platform => (
          <div key={platform.id}>
            <p key={platform.name}>{platform.name}</p>
            <img src={platform.img} key={platform.id} />
          </div>
        ))}

      </PlatformSection>

      {info.available &&
        <>
          <h3>Dias que se jugara esta semana</h3>
          <ul>
            {info.gameDays.map(gameDay => (
              <li key={gameDay.id}>{formatDate(gameDay.date)}</li>
            ))}
            {info.gameDays.length === 0 && <li>Tal vez no se jugara esta semana :( </li>}
          </ul>

          <h3>Patrocinadores</h3>
          <ul>
            {info.gameDays.filter(gameDay => gameDay.sponsor).length > 0
              ? info.gameDays.filter(gameDay => gameDay.sponsor).map(gameDay => (<li key={gameDay.id}>{gameDay.sponsor}</li>))
              : <p>No hay patrocinadores aun:(</p>}
          </ul>

        </>}
    </ModalStructure>
  )
}

export { ModalGameCard }
