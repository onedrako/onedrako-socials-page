import React from 'react'
import Countdown from 'react-countdown'
import { ScheduleCard } from './ScheduleCard'

import { NextStreamDiv } from '../../styles/Chill/ScheduleSection'

const SchedulesContainer = (props) => {
  const countries = props.countries
  console.log('flags', countries)
  return (
    <>
      <NextStreamDiv>
        <h2>Siguiente Stream en:</h2>
        <Countdown date={Date.now() + 10000} />
      </NextStreamDiv>

      <div>
        <ScheduleCard>
          {/* {props.flagsInfo.map(flag => (
            <img src={flag.flag} alt={flag.name} key={flag.country} />
          ))} */}
        </ScheduleCard>
      </div>
    </>
  )
}

export { SchedulesContainer }
