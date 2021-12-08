import React from 'react'
import { StyledDiv } from '../../styles/Discord/StyledResults'

export const ResultDivision = ({ userName, country, urlFlag }) => {
  return (
    <StyledDiv>
      <img src={urlFlag} alt={`bandera de ${urlFlag}`} />
      <div>
        <h2>{userName}</h2>
        <p>de {country}</p>
      </div>
    </StyledDiv>
  )
}
