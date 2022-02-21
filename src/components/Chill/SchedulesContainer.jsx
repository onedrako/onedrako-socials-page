import React from 'react'
import { ScheduleCard } from './ScheduleCard'

const SchedulesContainer = (props) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  // const userTimeZone = 'America/Bogota'

  const initialTimeForUserCountry = props.initialTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: userTimeZone })
  // console.log(initialTimeForUserCountry)
  const endTimeForUserCountry = props.endTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: userTimeZone })

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
