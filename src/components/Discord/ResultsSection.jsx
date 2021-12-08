import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ResultDivision } from './ResultDivision'
import { ContentSection } from '../../styles/Discord/StyledContentSection'

const ResultsSection = () => {
  const { huellitaValues } = useContext(AppContext)
  const { userName, country, color, userInformation, games, arrived, future, message, url } = huellitaValues

  return (
    <ContentSection>
      <ResultDivision userName={userName} country={country} urlFlag={url} />
      <div>
        <div>
          <h2>Sobre Mí:</h2>
          <p>Soy</p>
        </div>
        <div>
          <h2>Espero:</h2>
          <p>Quiero</p>
        </div>
        <div>
          <h2>Juegazos</h2>
          <p>Juego</p>
        </div>
        <div>
          <h2>llegue al Canal</h2>
          <p>OneDrako</p>
        </div>
        <div>
          <h2>Mensaje para la Muchachada</h2>
          <p>Abajo la Chaska</p>
        </div>

      </div>
    </ContentSection>
  )
}

export { ResultsSection }
