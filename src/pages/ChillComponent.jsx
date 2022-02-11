import React from 'react'
import { PrincipalSection } from './PrincipalSection'
import { SectionContainer } from '../components/Chill/sectionContainer'
import { GameDayCard } from '../components/Chill/GameDayCard'
import { SchedulesContainer } from '../components/Chill/SchedulesContainer'
import { GameCardContainer } from '../components/Chill/GameCardContainer'
import { GameCard } from '../components/Chill/GameCard'

const ChillComponent = () => {
  return (
    <main>
      <PrincipalSection />

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

        <h3>No disponibles </h3>
        <GameCardContainer>
          <GameCard available={false} />
        </GameCardContainer>

      </SectionContainer>
    </main>
  )
}

export { ChillComponent }
