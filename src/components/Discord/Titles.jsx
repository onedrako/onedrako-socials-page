import React from 'react'
import { StyledSubTitles } from '../../styles/Discord/StyledTitles'

const Titles = ({ title, url }) => {
  return (
    <StyledSubTitles>
      {(url) && <img src={url} alt={title} />}
      <h2>{title}</h2>
    </StyledSubTitles>
  )
}

export { Titles }
