import React from 'react'
import { FlagsContainer, ScheduleCardContainer, SchedulesPerCountry } from '../../styles/Chill/ScheduleCard'

const ScheduleCard = (props) => {
  return (
    <>
      <ScheduleCardContainer>
        <FlagsContainer>
          {props.children}
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
