import React from 'react'

import { GameDayCardContainer, CardContainer, MainInfoContainer, SponsorIcon, ExtraInfo } from '../../styles/Chill/GameCardDay'

const GameDayCard = () => {
  const [extraInfo, setExtraInfo] = React.useState(false)
  return (
    <>
      <GameDayCardContainer>

        <CardContainer onClick={() => setExtraInfo(!extraInfo)}>
          <img src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg' />
          <MainInfoContainer>
            <h3>Lunes 10 de febrero</h3>
            <div>
              <span>
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
