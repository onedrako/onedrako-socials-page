import React from 'react'
import { StyledDivForEmojiAndTitle } from '../../styles/Discord/StyledDivForEmojiAndTitle'

const ResultsTitle = ({ emoji, text }) => {
  return (
    <StyledDivForEmojiAndTitle>
      <span>{emoji}</span>
      <h2>{text}</h2>
    </StyledDivForEmojiAndTitle>
  )
}

export { ResultsTitle }
