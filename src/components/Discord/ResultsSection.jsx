import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import { ResultDivision } from './ResultDivision'
import { ResultsTitle } from './ResultsTitle'

import { ContentSection } from '../../styles/Discord/StyledContentSection'
import { StyledDiv } from '../../styles/Discord/StyledResultInfo'
import { StyledFormSection } from '../../styles/Discord/StyledFormSection'

const ResultsSection = ({ id }) => {
  const { huellitaValues, flagUrl } = useContext(AppContext)
  const { userName, country, color, userInformation, games, arrived, future, message } = huellitaValues

  if (!userName || !country || !flagUrl || !userInformation) {
    return null
  }

  const splitInformation = userInformation.split('\n')
  const splitGames = games.split('\n')
  const splitArrived = arrived.split('\n')
  const splitFuture = future.split('\n')
  const splitMessage = message.split('\n')

  return (
    <StyledFormSection backgroundColor={color} id={id}>
      <ContentSection>
        {country && userName && flagUrl && <ResultDivision userName={userName} country={country} urlFlag={flagUrl.url} />}
        <div>

          {userInformation &&
            <StyledDiv>
              <ResultsTitle text='Sobre mí:' emoji='🤗' />
              {splitInformation.map((info, index) => <p key={index}>{info}</p>)}
            </StyledDiv>}

          {future &&
            <StyledDiv>
              <ResultsTitle text='Espero en el futuro:' emoji='⏳' />
              {splitFuture.map((future, index) => <p key={index}>{future}</p>)}
            </StyledDiv>}

          {games &&
            <StyledDiv>
              <ResultsTitle text='Juegazos:' emoji='🎮' />
              {splitGames.map((game, index) => <p key={index}>{game}</p>)}
            </StyledDiv>}

          {arrived &&
            <StyledDiv>
              <ResultsTitle text='Llegue al canal' emoji='👋' />
              {splitArrived.map((arrived, index) => <p key={index}>{arrived}</p>)}
            </StyledDiv>}

          {message &&
            <StyledDiv>
              <ResultsTitle text='Mensaje:' emoji='💌' />
              {splitMessage.map((message, index) => <p key={index}>{message}</p>)}
            </StyledDiv>}

        </div>
      </ContentSection>
    </StyledFormSection>
  )
}

export { ResultsSection }
