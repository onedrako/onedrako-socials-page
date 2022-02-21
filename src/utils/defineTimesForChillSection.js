import { defineToday } from '../utils/defineToday'
import moment from 'moment-timezone'

const defineTimesForChillSection = (data) => {
  const today = defineToday(data)

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()
  const myStartStreamAreaInMexicoCity = moment.tz(`${today[0].date.substring(0, 10)}T${today[0].schedule.initialTime}`, 'America/Mexico_City')
  const myEndStreamAreaInMexicoCity = moment.tz(`${today[0].date.substring(0, 10)}T${today[0].schedule.endTime}`, 'America/Mexico_City')

  const initialTimeForUserCountry = moment.tz(myStartStreamAreaInMexicoCity, userTimeZone.timeZone).format('HH:mm')
  const endTimeForUserCountry = moment.tz(myEndStreamAreaInMexicoCity, userTimeZone.timeZone).format('HH:mm')

  const dateToCountDown = moment.tz(myStartStreamAreaInMexicoCity, userTimeZone.timeZone).format()

  return {
    userTimeZone: userTimeZone.timeZone,
    initialStreamSchedule: initialTimeForUserCountry,
    endStreamSchedule: endTimeForUserCountry,
    dateToCountDown: dateToCountDown
  }
}

export { defineTimesForChillSection }
