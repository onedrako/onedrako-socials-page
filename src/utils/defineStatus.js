import moment from 'moment-timezone'

const defineStatus = (status, date, schedule) => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const today = moment().format()
  const todayInLocalMexicoSchedule = moment.tz(`${date.substring(0, 10)}T${schedule.endTime}`, 'America/Mexico_City')

  const dateToCompare = moment.tz(todayInLocalMexicoSchedule, userTimeZone).format()

  if (status === false) {
    return status
  }

  if (dateToCompare >= today) {
    status = true
  } else {
    status = false
  }

  return status
}

export { defineStatus }
