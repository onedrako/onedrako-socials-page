import React from 'react'
import { Section, AboutButton } from './../styles/Chill/PrincipalSection'

const PrincipalSection = () => {
  const [info, setInfo] = React.useState(false)

  return (
    <Section>
      <AboutButton onClick={() => setInfo(!info)}>?</AboutButton>

      <h1>Canal de Juegos</h1>
    </Section>

  )
}

export { PrincipalSection }
