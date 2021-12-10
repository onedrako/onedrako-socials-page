import React from 'react'
import { useTranslation } from 'react-i18next'

import { StyledDiv } from '../../styles/Discord/StyledResults'

export const ResultDivision = ({ userName, country, urlFlag }) => {
  const [t] = useTranslation('global')
  const userNames = userName.split('\n')

  return (
    <StyledDiv>
      <img src={urlFlag} alt={`bandera de ${urlFlag}`} />
      <div>
        {userNames.map(name => <h2 key={name}>{name}</h2>)}
        <p>{t('discord.huellitaForm.country')} {country}</p>
      </div>
    </StyledDiv>
  )
}
