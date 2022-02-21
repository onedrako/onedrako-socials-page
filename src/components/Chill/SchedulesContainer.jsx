import React from 'react'
// import Countdown from 'react-countdown'
import { ScheduleCard } from './ScheduleCard'

// import { NextStreamDiv } from '../../styles/Chill/ScheduleSection'

const SchedulesContainer = (props) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()
  console.log(userTimeZone)
  const initialTimeForUserCountry = props.initialTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: `${userTimeZone.timeZone}` })
  const endTimeForUserCountry = props.endTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: `${userTimeZone.timeZone}` })

  return (
    <>
      <div>
        <ScheduleCard initialTime={initialTimeForUserCountry} endTime={endTimeForUserCountry}>
          {props.flagsInfo && props.flagsInfo.map((country, index) =>
            <img src={country.flag} alt={country.name} key={country.id} />
          )}
        </ScheduleCard>
      </div>
    </>
  )
}

export { SchedulesContainer }
