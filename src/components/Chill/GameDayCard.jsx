import React from 'react'

import { GameDayCardContainer, CardContainer, MainInfoContainer, SponsorIcon } from '../../styles/Chill/GameCardDay'

const GameDayCard = () => {
  return (
    <>
      <GameDayCardContainer>
        <CardContainer>
          <img src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg' />
          <MainInfoContainer>
            <h3>Lunes 10 de febrero</h3>
            <div>
              <SponsorIcon />
              <h3>Pitzi</h3>
            </div>
          </MainInfoContainer>
        </CardContainer>

        <div>
          <h2 />
        </div>
      </GameDayCardContainer>
    </>
  )
}

export { GameDayCard }
