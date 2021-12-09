import React, { useContext } from 'react'
import * as Yup from 'yup'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RequiredMessage } from './RequiredMessage'
import { AppContext } from '../../context/AppContext'
import { StyledDivision } from '../../styles/Discord/StyledDivision'
import { getCapture } from '../../utils/manageCapture'
import { scrollToDownload } from '../../utils/scrollToDownload'
// import { reducer } from '../../Reducers/FlagReducer'

const FormHuellita = ({ setVisible, setDisabled }) => {
  const { defineValues, dispatch } = useContext(AppContext)

  return (
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
      onSubmit={values => {
        setDisabled(true)
        setVisible(true)
        defineValues(values)
        dispatch({ type: values.country })
        setTimeout(() => {
          getCapture()
          setDisabled(false)
          scrollToDownload({ behavior: 'smooth' })
        }, 550)
      }}
      validationSchema={Yup.object().shape({
        userName: Yup.string().required(<RequiredMessage message='Por favor, menciona quien eres 😢' />),
        country: Yup.string().required(<RequiredMessage message='Por favor, menciona de donde eres 😢' />),
        userInformation: Yup.string().required(<RequiredMessage message='Por favor, menciona algo sobre ti 😢' />)
      })}
    >
      <Form>
        <StyledDivision>
          <label>Nombre de usuario por el que te conocen (sí usas varios nombres usa saltos de linea por cada nombre)</label>
          <Field as='textarea' name='userName' />
          <ErrorMessage name='userName' />
        </StyledDivision>

        <StyledDivision>
          <label>¿De que país eres? (Sí tu pais no esta, quejate con Gabito en Sugerencias en Discord para que lo agregue)</label>
          <Field as='select' name='country'>
            <option value=''>Selecciona un pais</option>
            <option value='Alemania'>Alemania</option>
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
            <option value='Republica Dominicana'>Argentina</option>
            <option value='Uruguay'>Uruguay</option>
            <option value='Venezuela'>Venezuela</option>
          </Field>
          <ErrorMessage name='country' />
        </StyledDivision>

        <StyledDivision>
          <label>Selecciona un color</label>
          <Field type='color' name='color' />
        </StyledDivision>

        <StyledDivision>
          <label>Sobre ti, ¿qué te gusta hacer?, ¿a qué te dedicas?, ¿historia?... en resumen ¿Quién eres?</label>
          <Field as='textarea' name='userInformation' />
          <ErrorMessage name='userInformation' />
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

        <button type='submit'>Generar Presentación </button>

      </Form>
    </Formik>
  )
}

export { FormHuellita }
