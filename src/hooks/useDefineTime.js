import { useState } from 'react'

const useDefineTimes = () => {
  const [todaySchedule, setTodaySchedule] = useState('')
  const [userTimeZone, setUserTimeZone] = useState('')
  const [initialStreamSchedule, setInitialStreamSchedule] = useState('')
  const [endStreamSchedule, setEndStreamSchedule] = useState('')
  const [dateToCountDown, setDateToCountDown] = useState('')

  return [
    todaySchedule,
    userTimeZone,
    initialStreamSchedule,
    endStreamSchedule,
    dateToCountDown,

    setTodaySchedule,
    setUserTimeZone,
    setInitialStreamSchedule,
    setEndStreamSchedule,
    setDateToCountDown
  ]
}

export { useDefineTimes }
