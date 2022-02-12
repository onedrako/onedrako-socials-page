import React from 'react'
import { Section } from './../styles/Chill/PrincipalSection'

const PrincipalSection = (props) => {
  return (
    <Section>
      {props.children}
      <h1>Canal de Juegos</h1>
    </Section>

  )
}

export { PrincipalSection }
