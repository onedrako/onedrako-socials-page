import React from 'react'
import Countdown from 'react-countdown'
import { ScheduleCard } from './ScheduleCard'

import { NextStreamDiv } from '../../styles/Chill/ScheduleSection'

const SchedulesContainer = () => {
  return (
    <>
      <NextStreamDiv>
        <h2>Siguiente Stream en:</h2>
        <Countdown date={Date.now() + 10000} />
      </NextStreamDiv>

      <div>
        <ScheduleCard />
        {/* <ScheduleCard /> */}
      </div>
    </>
  )
}

export { SchedulesContainer }
