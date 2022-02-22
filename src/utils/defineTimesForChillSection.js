import { defineToday } from '../utils/defineToday'
import moment from 'moment-timezone'

const defineTimesForChillSection = (data) => {
  let dateToCountDown
  const today = defineToday(data)

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions()
  const myStartStreamAreaInMexicoCity = moment.tz(`${today[0].date.substring(0, 10)}T${today[0].schedule.initialTime}`, 'America/Mexico_City')
  const myEndStreamAreaInMexicoCity = moment.tz(`${today[0].date.substring(0, 10)}T${today[0].schedule.endTime}`, 'America/Mexico_City')

  const initialTimeForUserCountry = moment.tz(myStartStreamAreaInMexicoCity, userTimeZone.timeZone).format('HH:mm')
  const endTimeForUserCountry = moment.tz(myEndStreamAreaInMexicoCity, userTimeZone.timeZone).format('HH:mm')

  // DEFINE COUNTDOWN
  if (today[0].state === 'true') {
    dateToCountDown = moment.tz(myStartStreamAreaInMexicoCity, userTimeZone.timeZone).format()
  } else {
    let addDays = 0
    let status = false

    const nextDaysFromToday = data.filter(gameDay => {
      const { date } = gameDay
      return date > today[0].date
    }).sort((a, b) => {
      return moment(a.date) - moment(b.date)
    })

    while (!status && addDays < nextDaysFromToday.length) {
      nextDaysFromToday[addDays].state === false
        ? addDays++
        : status = true
    }

    if (addDays === 0) {
      dateToCountDown = moment.tz(myEndStreamAreaInMexicoCity, userTimeZone.timeZone).add(1, 'days').format()
    } else {
      dateToCountDown = moment.tz(myEndStreamAreaInMexicoCity, userTimeZone.timeZone).add(addDays + 1, 'days').format()
    }
  }

  return {
    userTimeZone: userTimeZone.timeZone,
    initialStreamSchedule: initialTimeForUserCountry,
    endStreamSchedule: endTimeForUserCountry,
    dateToCountDown: dateToCountDown
  }
}

export { defineTimesForChillSection }
