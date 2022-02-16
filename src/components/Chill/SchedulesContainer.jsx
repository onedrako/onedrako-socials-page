import React from 'react'
// import Countdown from 'react-countdown'
import { ScheduleCard } from './ScheduleCard'

// import { NextStreamDiv } from '../../styles/Chill/ScheduleSection'

const SchedulesContainer = (props) => {
  return (
    <>
      {/* <NextStreamDiv>
        <h2>Siguiente Stream en:</h2>
        <Countdown date={Date.now() + 10000} />
      </NextStreamDiv> */}

      <div>
        <ScheduleCard>
          {props.flagsInfo && props.flagsInfo.map((country, index) =>
            <img src={country.flag} alt={country.name} key={country.id} />
          )}
        </ScheduleCard>
      </div>
    </>
  )
}

export { SchedulesContainer }
