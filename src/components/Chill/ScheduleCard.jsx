import React from 'react'
import { FlagsContainer, ScheduleCardContainer, SchedulesPerCountry } from '../../styles/Chill/ScheduleCard'

const ScheduleCard = (props) => {
  console.log(props)
  return (
    <>
      <ScheduleCardContainer>
        <FlagsContainer>
          {props.children}
        </FlagsContainer>
        <SchedulesPerCountry>
          <p>Inicio: {props.initialTime}</p>
          <p>Final: {props.endTime}</p>
        </SchedulesPerCountry>
      </ScheduleCardContainer>
    </>
  )
}

export { ScheduleCard }
