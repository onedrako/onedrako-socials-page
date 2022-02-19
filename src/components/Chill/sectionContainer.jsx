import React from 'react'
import { Section } from '../../styles/Chill/SectionContainer'

const SectionContainer = (props) => {
  return (
    <Section>
      <h2>{props.title}</h2>
      {props.children}
    </Section>
  )
}

export { SectionContainer }
