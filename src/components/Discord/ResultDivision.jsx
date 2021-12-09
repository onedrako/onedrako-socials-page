import React from 'react'
import { StyledDiv } from '../../styles/Discord/StyledResults'

export const ResultDivision = ({ userName, country, urlFlag }) => {
  const userNames = userName.split('\n')

  return (
    <StyledDiv>
      <img src={urlFlag} alt={`bandera de ${urlFlag}`} />
      <div>
        {userNames.map(name => <h2 key={name}>{name}</h2>)}
        <p>de {country}</p>
      </div>
    </StyledDiv>
  )
}
