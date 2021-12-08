import React, { useState, createContext } from 'react'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [huellitaValues, setHuellitaValues] = useState({
    userName: '',
    country: '',
    color: '#000000',
    userInformation: '',
    future: '',
    games: '',
    arrived: '',
    message: '',
    urlFlag: ''
  })

  const defineValues = (values) => {
    setHuellitaValues(values)
  }

  console.log('State', huellitaValues)

  return (
    <AppContext.Provider value={{ huellitaValues, setHuellitaValues, defineValues }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
