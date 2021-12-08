import React, { useContext, useReducer } from 'react'
import { AppContext } from '../../context/AppContext'
import { ResultDivision } from './ResultDivision'

import { ContentSection } from '../../styles/Discord/StyledContentSection'
import { StyledDiv } from '../../styles/Discord/StyledResultInfo'

const ResultsSection = () => {
  const { huellitaValues, flagUrl } = useContext(AppContext)
  const { userName, country, color, userInformation, games, arrived, future, message } = huellitaValues
  console.log('En resultados', huellitaValues)
  console.log('En resultados', flagUrl)

  if (!userName || !country || !flagUrl) {
    return null
  }

  return (
    <ContentSection>

      {country && userName && flagUrl && <ResultDivision userName={userName} country={country} urlFlag={flagUrl.url} />}
      <div>
        {userInformation &&
          <StyledDiv>
            <h2>Sobre Mi:</h2>
            <p>{userInformation}</p>
          </StyledDiv>}

        <StyledDiv>
          <h2>Espero:</h2>
          <p>{future}</p>
        </StyledDiv>
        <StyledDiv>
          <h2>Juegazos:</h2>
          <p>{games}</p>
        </StyledDiv>
        <StyledDiv>
          <h2>Llegué al canal:</h2>
          <p>{arrived}</p>
        </StyledDiv>
        <StyledDiv>
          <h2>Mensaje para la Muchachada:</h2>
          <p>{message}</p>
        </StyledDiv>
      </div>
    </ContentSection>
  )
}

export { ResultsSection }
