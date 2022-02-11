import React from 'react'
import { FlagsContainer, ScheduleCardContainer, SchedulesPerCountry } from '../../styles/Chill/ScheduleCard'

const ScheduleCard = () => {
  return (
    <>
      <ScheduleCardContainer>
        <FlagsContainer>
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
          <img src='https://cdn-icons-png.flaticon.com/512/330/330433.png' alt='' />
        </FlagsContainer>
        <SchedulesPerCountry>
          <p>Inicio: 19:30</p>
          <p>Final: 21:30</p>
        </SchedulesPerCountry>
      </ScheduleCardContainer>
    </>
  )
}

export { ScheduleCard }
