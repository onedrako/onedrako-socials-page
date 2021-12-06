import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: 'none',
  color: '#fff'
}

const DiscordComponent = () => {
  return (
    <main>
      <h1>Página de Información de Discord || En construcción</h1>
      <p>Si vienes en busqueda del formulario para tu presentación has click <Link style={linkStyle} to='/discord/huellita'>aqui</Link> </p>
    </main>
  )
}

export { DiscordComponent }
