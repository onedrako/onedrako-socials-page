import React from 'react'
import { SectionContainer } from '../components/Chill/sectionContainer'
import { GameDayCard } from '../components/Chill/GameDayCard'

const ChillComponent = () => {
  const [info, setInfo] = React.useState(false)

  return (
    <main>

      <section>
        <h1>Canal de Juegos</h1>
        <div>
          <button onClick={() => setInfo(!info)}>?</button>
        </div>
      </section>

      <SectionContainer title='Calendario Semanal'>
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
        <GameDayCard />
      </SectionContainer>

      <SectionContainer title='Horarios'>
        <p>Prueba</p>
      </SectionContainer>

      <SectionContainer title='Juegos'>
        <p>Juegos</p>
      </SectionContainer>
    </main>
  )
}

export { ChillComponent }
