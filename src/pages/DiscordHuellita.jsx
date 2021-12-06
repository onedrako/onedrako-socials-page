import React from 'react'
import { Titles } from '../components/Discord/Titles'
import { StyledFormSection } from '../styles/Discord/FormSection'
import { StyledTitles } from '../styles/Discord/StyledTitles'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const DiscordHuellita = () => {
  return (
    <>
      <StyledFormSection>
        <StyledTitles>
          <img src='https://image.flaticon.com/icons/png/512/2626/2626288.png' alt='Discord' />
          <h1>Canal de Discord "Dejando Huellita</h1>
        </StyledTitles>
        <Titles title='Formulario "Dejando Huellita"' url='https://image.flaticon.com/icons/png/512/672/672634.png' />
        <p>Hola, bienvenida/bienvenido, este espacio es para dejar tu mensaje en el canal "dejando huellita" en nuestro discord.</p>
        <p>Cada uno de nosotros hemos llegado por diferentes circunstancias al stream, algunos se han ido con el paso del tiempo y otros llegan, espero hayan encontrado un lugar de paz como lo es para mí.</p>
        <p>Para dejar recuerdo y huella de que te pasaste por aqui, por si en algún momento decides huir y nunca regresar, los que quedemos podremos ver ese detalle de que estuviste por aca.</p>
        <Titles title='Consideraciones importantes' url='https://image.flaticon.com/icons/png/512/2534/2534888.png' />
        <ol>
          <li>NO incluyas información personal, esto va a un lugar PÚBLICO, aunque tratamos de ser buena gente, no sabes quien ande viendo por ahi, por lo que te pido no incluir ningún dato personal.</li>
          <li>No estas obligada/obligado a llenar todos los espacios, (nombre de usuario y país por lo menos) lo que quieras compartir esta bien.</li>
          <li>Esto lo puedes llenar (si gustas) 1 vez cada dos años, las cosas cambian según el tiempo y que te sirva tambien de recordatorio para ti. </li>
          <li>Tomalo un poco enserio, deja buen recuerdo para la muchachada.</li>
        </ol>
        <Titles title='Asi Funciona' />
        <ol>
          <li>Tienes que llenar los campos y cuando termines oprimir el boton enviar, esto generara la imagen para descargar</li>
          <li>Publica la imagen en el canal "dejando huellita" del discord </li>
        </ol>
      </StyledFormSection>

      <StyledFormSection>
        <StyledTitles>
          <img src='https://image.flaticon.com/icons/png/512/3157/3157914.png' alt='Imagen Formulario' />
          <h1>Comienza a Llenar Aqui</h1>
          <Formik
            initialValues={{ userName: '', country: '', message: '' }}
            validate={console.log('validando')}
            onSubmit={console.log('enviando')}
          >
            <Form>
              <label>Nombre de Usuario</label>
              <Field type='text' name='userName' />
              <ErrorMessage name='userName' />
            </Form>
          </Formik>
        </StyledTitles>
      </StyledFormSection>

      <StyledFormSection />
    </>
  )
}

export { DiscordHuellita }
