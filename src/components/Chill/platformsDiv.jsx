import React from 'react'
import { PlatformsStyledDiv } from '../../styles/Chill/GameCardDay'

const PlatformsDiv = ({ img, name }) => {
  return (
    <PlatformsStyledDiv>
      <p>{name}</p>
      <img src={img} alt={`Imagen de ${name}`} />
    </PlatformsStyledDiv>
  )
}

export { PlatformsDiv }
