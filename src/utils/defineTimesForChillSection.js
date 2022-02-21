import { defineToday } from '../utils/defineToday'
import moment from 'moment-timezone'

const defineTimesForChillSection = (data) => {
  const today = defineToday(data)
  console.log('today', today)

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()

  const initialStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.initialTime}`)
  const endStreamSchedule = new Date(`${today[0].date.substring(0, 10)}T${today[0].schedule.endTime}`)

  const myStartStreamAreaInMexicoCity = moment.tz(initialStreamSchedule, 'America/Mexico_City')
  const myEndStreamAreaInMexicoCity = moment.tz(endStreamSchedule, 'America/Mexico_City')

  const initialTimeForUserCountry = moment.tz(myStartStreamAreaInMexicoCity, userTimeZone.timeZone).format('HH:mm')
  const endTimeForUserCountry = moment.tz(myEndStreamAreaInMexicoCity, userTimeZone.timeZone).format('HH:mm')

  const dateToCountDown = `${today[0].date.substring(0, 10)}T${initialTimeForUserCountry}`
  console.log(dateToCountDown)

  return {
    userTimeZone: userTimeZone.timeZone,
    initialStreamSchedule: initialTimeForUserCountry,
    endStreamSchedule: endTimeForUserCountry,
    dateToCountDown: dateToCountDown
  }
}

export { defineTimesForChillSection }
