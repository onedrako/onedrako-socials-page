import { defineToday } from '../utils/defineToday'

const defineTimesForChillSection = (data) => {
  const today = defineToday(data)
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()

  const initialStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.initialTime}`)
  const endStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.endTime}`)

  const initialTimeForUserCountry = (initialStreamSchedule).toLocaleTimeString('es-ES', { timeZone: `${userTimeZone.timeZone}` })
  const dateToCountDown = `${today[0].date.substring(0, 10)}T${initialTimeForUserCountry}`

  return {
    userTimeZone: userTimeZone.timeZone,
    initialStreamSchedule: initialStreamSchedule,
    endStreamSchedule: endStreamSchedule,
    dateToCountDown: dateToCountDown
  }
}

export { defineTimesForChillSection }
