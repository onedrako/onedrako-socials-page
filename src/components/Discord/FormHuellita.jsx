import React, { useContext } from 'react'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RequiredMessage } from './RequiredMessage'
import { AppContext } from '../../context/AppContext'
import { StyledDivision } from '../../styles/Discord/StyledDivision'
import { getCapture } from '../../utils/manageCapture'
import { scrollToDownload } from '../../utils/scrollToDownload'
// import { reducer } from '../../Reducers/FlagReducer'

const FormHuellita = ({ setVisible, setDisabled, language }) => {
  const { defineValues, dispatch } = useContext(AppContext)
  const [t] = useTranslation('global')
  console.log(language)

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
        userName: Yup.string().required(<RequiredMessage message={t('discord.huellitaForm.requiredMessage1')} />),
        country: Yup.string().required(<RequiredMessage message={t('discord.huellitaForm.requiredMessage2')} />),
        userInformation: Yup.string().required(<RequiredMessage message={t('discord.huellitaForm.requiredMessage3')} />)
      })}
    >
      <Form>
        <StyledDivision>
          <label>{t('discord.huellitaForm.input1')}</label>
          <Field as='textarea' name='userName' />
          <ErrorMessage name='userName' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input2')}</label>
          <Field as='select' name='country'>
            <option value=''>{t('discord.huellitaForm.selectCountry')}</option>
            <option value='Alemania'>Alemania</option>
            <option value='Argentina'>Argentina</option>
            <option value='Bolivia'>Bolivia</option>
            <option value='Brasil'>Brasil</option>
            <option value='Chile'>Chile</option>
            <option value='Colombia'>Colombia</option>
            <option value='Ecuador'>Ecuador</option>
            <option value='El Salvador'>El Salvador</option>
            <option value='España'>España</option>
            {language === 'es' ? (<option value='Estados Unidos'>{t('discord.huellitaForm.USA')}</option>) : null}
            <option value='Guatemala'>Guatemala</option>
            <option value='Honduras'>Honduras</option>
            <option value='México'>México</option>
            <option value='Panamá'>Panamá</option>
            <option value='Perú'>Perú</option>
            <option value='Portugal'>Portugal</option>
            <option value='Republica Dominicana'>Republica Dominicana</option>
            {language === 'en' ? (<option value='United States'>{t('discord.huellitaForm.USA')}</option>) : null}
            <option value='Uruguay'>Uruguay</option>
            <option value='Venezuela'>Venezuela</option>
          </Field>
          <ErrorMessage name='country' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input3')}</label>
          <Field type='color' name='color' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input4')}</label>
          <Field as='textarea' name='userInformation' />
          <ErrorMessage name='userInformation' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input5')}</label>
          <Field as='textarea' name='future' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input6')}</label>
          <Field as='textarea' name='games' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input7')}</label>
          <Field as='textarea' name='arrived' />
        </StyledDivision>

        <StyledDivision>
          <label>{t('discord.huellitaForm.input8')}</label>
          <Field as='textarea' name='message' />
        </StyledDivision>

        <button type='submit'>{t('discord.huellitaForm.formButton')} </button>

      </Form>
    </Formik>
  )
}

export { FormHuellita }
