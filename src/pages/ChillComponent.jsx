import React from 'react'
import { PrincipalSection } from './PrincipalSection'
import { SectionContainer } from '../components/Chill/sectionContainer'
import { GameDayCard } from '../components/Chill/GameDayCard'
import { SchedulesContainer } from '../components/Chill/SchedulesContainer'

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

      <SectionContainer title='Juegos'>
        <p>Juegos</p>
      </SectionContainer>
    </main>
  )
}

export { ChillComponent }
