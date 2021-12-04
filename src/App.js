import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom'

import { NavBar } from './components/Nav/NavBar'
const App = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Sitio en Construcción</h1>} />
        <Route path='/chill' element={<h1>Canal de Juegos</h1>} />
        <Route path='/productividad' element={<h1>Productividad</h1>} />
        <Route path='/discord' element={<h1>Discord</h1>} />
        <Route path='*' element={<h1>Error 404: Este sitio no fue encontrado</h1>} />
      </Routes>
    </>
  )
}

export default App
