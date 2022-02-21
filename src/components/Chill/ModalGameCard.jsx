import React from 'react'
import {
  ModalStructureForGameCard,
  LeftArrow,
  RightArrow,
  GameImageSection,
  PlatformSection,
  TitleDiv,
  GameDaysDiv,
  SponsorsDiv
} from '../../styles/Chill/Modal'

const ModalGameCard = ({ info, pushInfo }) => {
  const formatDate = (dateToConvert) => {
    const date = new Date(dateToConvert)
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('es-ES', options)
  }

  return (
    <ModalStructureForGameCard>

      <GameImageSection>
        <img src={info.boxImage} alt={info.name} />

        <LeftArrow onClick={() => pushInfo(info.id, 'previous')} />
        <RightArrow onClick={() => pushInfo(info.id, 'next')} />

      </GameImageSection>

      <TitleDiv>
        <h2>{info.name}</h2>
        <h3>¿Que hacemos en este juego?</h3>
        <p>{info.description}</p>
      </TitleDiv>

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
          <GameDaysDiv>
            <h3>Dias que se jugara esta semana</h3>

            {info.gameDays.map(gameDay => (
              <p key={gameDay.id}>{formatDate(gameDay.date)}</p>
            ))}
            {info.gameDays.length === 0 && <p>Tal vez no se jugara esta semana :( </p>}

          </GameDaysDiv>

          <SponsorsDiv>
            <h3>Patrocinadores</h3>
            <ul>
              {info.gameDays.filter(gameDay => gameDay.sponsor).length > 0
                ? info.gameDays.filter(gameDay => gameDay.sponsor).map(gameDay => (<p key={gameDay.id}>{gameDay.sponsor}</p>))
                : <p>No hay patrocinadores aun 🙁</p>}
            </ul>
          </SponsorsDiv>
        </>}
    </ModalStructureForGameCard>
  )
}

export { ModalGameCard }
