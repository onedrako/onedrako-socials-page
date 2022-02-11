import React from 'react'
import { StyledGameCardContainer } from '../../styles/Chill/GameCards'

const GameCardContainer = (props) => {
  return (
    <StyledGameCardContainer>
      {props.children}
    </StyledGameCardContainer>
  )
}

export { GameCardContainer }
