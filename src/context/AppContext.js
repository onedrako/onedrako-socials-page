import React, { useState, createContext, useReducer } from 'react'
import { reducer } from '../Reducers/FlagReducer'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [huellitaValues, setHuellitaValues] = useState({
    userName: '',
    country: '',
    color: '#212525',
    userInformation: '',
    future: '',
    games: '',
    arrived: '',
    message: ''
  })

  const defineValues = (values) => {
    setHuellitaValues(values)
  }

  const [flagUrl, dispatch] = useReducer(reducer, { url: '' })
  return (
    <AppContext.Provider value={{
      huellitaValues,
      setHuellitaValues,
      defineValues,

      flagUrl,
      dispatch
    }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
