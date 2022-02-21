import { defineToday } from '../utils/defineToday'

const defineTimesForChillSection = (data) => {
  // console.log(data)
  const today = defineToday(data)
  console.log(today)

  const realToday = today[0].date
  // console.log(realToday)

  // console.log('today', today)

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()

  // console.log('tz', userTimeZone.timeZone)

  const initialStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.initialTime}`)
  // console.log('timezonoff', initialStreamSchedule.getTimezoneOffset() / 60)

  // console.log('initial', initialStreamSchedule)

  const endStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.endTime}`)

  const initialTimeForUserCountry = initialStreamSchedule.toLocaleTimeString('es-ES', { timeZone: userTimeZone.timeZone })
  const dateToCountDown = `${today[0].date.substring(0, 10)}T${initialTimeForUserCountry}`

  return {
    userTimeZone: userTimeZone.timeZone,
    initialStreamSchedule: initialStreamSchedule,
    endStreamSchedule: endStreamSchedule,
    dateToCountDown: dateToCountDown
  }
}

export { defineTimesForChillSection }
