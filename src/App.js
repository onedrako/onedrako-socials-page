import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom'

import { NavBarComponent } from './components/Nav/NavBarComponent'
import { DiscordComponent } from './pages/DiscordComponent'
import { DiscordHuellita } from './pages/DiscordHuellita'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<h1>Sitio en Construcción</h1>} />
        <Route path='/chill' element={<h1>Canal de Juegos</h1>} />
        <Route path='/productividad' element={<h1>Sitio en construcción Productividad</h1>} />

        <Route path='/discord' element={<DiscordComponent />} />
        <Route path='/discord/huellita' element={<DiscordHuellita />} />

        <Route path='*' element={<h1>Error 404: Este sitio no fue encontrado</h1>} />
      </Routes>
    </>
  )
}

export default App
