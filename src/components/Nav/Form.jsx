import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Select } from './FormElements'

const UserInformationForm = () => {
  const validate = values => {
    const errors = {}
    if (!values.userName) {
      errors.userName = 'Required'
    } else if (values.userName.length < 5) {
      errors.userName = 'Must be at least 5 characters'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    }
    return errors
  }

  return (
    <Formik
      initialValues={{
        userName: '',
        country: '',
        color: '',
        description: '',
        future: '',
        videoGames: '',
        arrived: '',
        message: ''
      }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >

      <Form>
        <label>Nombre de Usuario </label>
        <Field name='userName' type='text' />
        <ErrorMessage name='userName' />
        <br />
        <Select>
          <option value=''>Selecciona un pais</option>
          <option value=''>Colombia</option>
          <option value=''>Argentina</option>
          <option value=''>Mexico</option>
          <option value=''>Mexico</option>
          <option value=''>Mexico</option>
          <option value=''>Mexico</option>
          <option value=''>Mexico</option>
          <option value=''>Mexico</option>
          <option value=''>Mexico</option>
          <option> </option>
        </Select>
        <button>Enviar</button>
      </Form>

    </Formik>
  )
}

export { UserInformationForm }
