import React from 'react'
import { ModalStructure } from '../../styles/Chill/Modal'

const ModalInfo = () => {
  return (
    <ModalStructure>
      <h2>Info Importante</h2>
      <p>Hola, aquí encontraras información sobre el canal en el que jugamos </p>
      <button><a href='https://www.twitch.tv/onedrako' target='_blank' rel='noreferrer'>Canal de twitch</a></button>

      <h3>Horario Semanal</h3>
      <p>Esta de Lunes a Domingo, normalmente descansamos los Lunes pero aquí se colocara o en discord si hay algún cambio</p>
      <p>Cada tarjeta tiene la fecha y el juego que jugaríamos ese dia.</p>
      <p>También hay un tickesito, este representa si alguien patrocino con puntos del canal que juguemos a ese juego ese dia. </p>
      <p> Hay un máximo de dos patrocinios por semana, cada persona puede pagar solo una vez a la semana y solo se puede pagar ese juego una vez por semana, esto para evitar el monopolio de Leallin y sus miles de puntos</p>

      <h3>Horario de juego</h3>
      <p>Aquí encuentra el countdown para el siguiente stream </p>
      <p>Y el horario en el que se hacen normalmente los directos</p>

      <h3>Juegos y Eventos</h3>
      <p>Esta sección se divide entre los juegos disponibles para poder pedirlo con los puntos,</p>
      <p>Y los que hemos jugado y por alguna razón ya no podemos jugar, sea por que ya esta patrocinado esa semana, ya no lo tengo, me falta suscripción para online o ya no tengo el juego.</p>
      <p>No son todos los juegos disponibles para pedir, son los que mas jugamos en directo, pero si tienes alguna sugerencia puedes preguntar con confianza si es posible jugarlo </p>
    </ModalStructure>
  )
}

export { ModalInfo }
