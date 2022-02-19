import React from 'react'
import { ModalStructure } from '../../styles/Chill/Modal'

const ModalSponsor = () => {
  return (
    <ModalStructure>
      <h2>Sobre Patrocinar Juego</h2>
      <p>Hola, aquí encontraras información sobre los patrocinios de juegos</p>
      <button><a href='https://www.twitch.tv/onedrako' target='_blank' rel='noreferrer'>Canal de twitch</a></button>

      <h3>Maletolares y Chambeadolares para patrocinar</h3>
      <p> Puedes patrocinar con puntos del canal que juguemos a ese juego un dia de la semana. </p>
      <p> En el canal de juegos su precio es de 22,500 puntos y en el productividad es de 45,000</p>
      <p> Hay un máximo de dos patrocinios por semana, cada persona puede pagar solo una vez a la semana y solo se puede pagar ese juego una vez por semana, esto para evitar el monopolio de Leallin y sus miles de puntos</p>

    </ModalStructure>
  )
}

export { ModalSponsor }
