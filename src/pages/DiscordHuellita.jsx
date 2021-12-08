import React from 'react'

import { Titles } from '../components/Discord/Titles'
import { FormHuellita } from '../components/Discord/FormHuellita'
import { ResultsSection } from '../components/Discord/ResultsSection'

import { StyledFormSection, StyledP, StyledLi } from '../styles/Discord/StyledFormSection'
import { StyledTitles } from '../styles/Discord/StyledTitles'
import { FormContainer } from '../styles/Discord/FormContainer'

const DiscordHuellita = () => {
  return (
    <FormContainer>
      <StyledFormSection>
        <StyledTitles>
          <img src='https://image.flaticon.com/icons/png/512/2626/2626288.png' alt='Discord' />
          <h1>Canal de Discord "Dejando Huellita</h1>
        </StyledTitles>
        <Titles title='Formulario "Dejando Huellita"' url='https://image.flaticon.com/icons/png/512/672/672634.png' />
        <StyledP>Hola, bienvenida/bienvenido, este espacio es para dejar tu mensaje en el canal "dejando huellita" en nuestro discord.</StyledP>
        <StyledP>Cada uno de nosotros hemos llegado por diferentes circunstancias al stream, algunos se han ido con el paso del tiempo y otros llegan, espero hayan encontrado un lugar de paz como lo es para mí.</StyledP>
        <StyledP>Para dejar recuerdo y huella de que te pasaste por aqui, por si en algún momento decides huir y nunca regresar, los que quedemos podremos ver ese detalle de que estuviste por aca.</StyledP>
        <Titles title='Consideraciones importantes' url='https://image.flaticon.com/icons/png/512/2534/2534888.png' />
        <ol>
          <StyledLi>NO incluyas información personal, esto va a un lugar PÚBLICO, aunque tratamos de ser buena gente, no sabes quien ande viendo por ahi, por lo que te pido no incluir ningún dato personal.</StyledLi>
          <StyledLi>No estas obligada/obligado a llenar todos los espacios, (nombre de usuario, país y algo sobre ti por lo menos) lo que quieras compartir esta bien.</StyledLi>
          <StyledLi>Esto lo puedes llenar (si gustas) 1 vez cada dos años, las cosas cambian según el tiempo y que te sirva tambien de recordatorio para ti. </StyledLi>
          <StyledLi>Tomalo un poco enserio, deja buen recuerdo para la muchachada.</StyledLi>
        </ol>
        <Titles title='Asi Funciona' />
        <ol>
          <StyledLi>Tienes que llenar los campos y cuando termines oprimir el boton enviar, esto generara la imagen para descargar</StyledLi>
          <StyledLi>Publica la imagen en el canal "dejando huellita" del discord </StyledLi>
        </ol>
      </StyledFormSection>

      <StyledFormSection>
        <StyledTitles>
          <img src='https://image.flaticon.com/icons/png/512/3157/3157914.png' alt='Imagen Formulario' />
          <h1>Comienza a llenar aqui</h1>
        </StyledTitles>
        <FormHuellita />
      </StyledFormSection>

      <ResultsSection />

    </FormContainer>
  )
}

export { DiscordHuellita }
