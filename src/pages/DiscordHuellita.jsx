import React from 'react'
import { Titles } from '../components/Discord/Titles'
import { StyledFormSection } from '../styles/Discord/StyledFormSection'
import { StyledTitles } from '../styles/Discord/StyledTitles'
import { Formik, Form, Field } from 'formik'
import { StyledDivision } from '../styles/Discord/StyledDivision'
import * as Yup from 'yup'

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
          <h1>Comienza a llenar aqui</h1>
        </StyledTitles>
        <Formik
          initialValues={{
            userName: '',
            country: '',
            color: '#000000',
            userInformation: '',
            future: '',
            games: '',
            arrived: '',
            message: ''
          }}
          onSubmit={values => console.log(values)}
          validationSchema={Yup.object({
            userName: Yup.string().required('El nombre de usuario es requerido'),
            country: Yup.string()
          })}
        >
          <Form>
            <StyledDivision>
              <label>Nombre de usuario por el que te conocen (sí usas varios nombres usa saltos de linea por cada nombre)</label>
              <Field type='text' name='userName' />
            </StyledDivision>

            <StyledDivision>
              <label>¿De que país eres? (Sí tu pais no esta, quejate con Gabito en Sugerencias en Discord para que lo agregue)</label>
              <Field as='select' name='country'>
                <option value='Argentina'>Argentina</option>
                <option value='Bolivia'>Bolivia</option>
                <option value='Brasil'>Brasil</option>
                <option value='Chile'>Chile</option>
                <option value='Colombia'>Colombia</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='El Salvador'>El Salvador</option>
                <option value='España'>España</option>
                <option value='Estados Unidos'>Estados Unidos</option>
                <option value='Guatemala'>Guatemala</option>
                <option value='Honduras'>Honduras</option>
                <option value='México'>México</option>
                <option value='Panamá'>Panamá</option>
                <option value='Perú'>Perú</option>
                <option value='Portugal'>Portugal</option>
                <option value='Uruguay'>Uruguay</option>
                <option value='Venezuela'>Venezuela</option>
              </Field>
            </StyledDivision>

            <StyledDivision>
              <label>Selecciona un color</label>
              <Field type='color' name='color' />
            </StyledDivision>

            <StyledDivision>
              <label>Descripción sobre ti, ¿qué te gusta hacer?¿a qué te dedicas?¿historia?... en resumen ¿Quién eres?</label>
              <Field as='textarea' name='userInformation' />
            </StyledDivision>

            <StyledDivision>
              <label>¿Que esperas para ti?, ¿Qué quieres hacer?, ¿Sueños de vida?</label>
              <Field as='textarea' name='future' />
            </StyledDivision>

            <StyledDivision>
              <label>!Nuevo: ¿Qué juegas?, ¿Donde juegas? (juegos y plataformas favoritas)</label>
              <Field as='textarea' name='games' />
            </StyledDivision>

            <StyledDivision>
              <label>¿Como llegaste al canal?</label>
              <Field as='textarea' name='arrived' />
            </StyledDivision>

            <StyledDivision>
              <label>Un mensaje/consejo o lo que le quieras decir a las compañeras y compañeros de la comunidad</label>
              <Field as='textarea' name='message' />
            </StyledDivision>

            <button type='submit'>Enviar</button>

          </Form>
        </Formik>
      </StyledFormSection>

      <StyledFormSection />
    </>
  )
}

export { DiscordHuellita }
