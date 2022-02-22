import React from 'react'
import { ScheduleCard } from './ScheduleCard'

const SchedulesContainer = (props) => {
  return (
    <>
      <div>
        <ScheduleCard initialTime={props.initialTime} endTime={props.endTime} timeZone={props.timeZone}>
          {props.flagsInfo && props.flagsInfo.map((country, index) =>
            <img src={country.flag} alt={country.name} key={country.id} />
          )}
        </ScheduleCard>
      </div>
    </>
  )
}

export { SchedulesContainer }
