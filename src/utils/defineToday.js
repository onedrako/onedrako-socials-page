const getDayAndMonth = (date) => {
  const day = date.getDate()
  const month = date.getMonth()
  return { day, month }
}

const today = new Date(Date.now())

const defineToday = (days) => {
  const actualDay = getDayAndMonth(today)
  console.log('actualDay', actualDay)

  const coincidence = days.filter(gameDay => {
    const { date } = gameDay
    const dayDate = new Date(`${date.substring(0, 10)}T00:00`)
    const getTodayDayAndMonth = getDayAndMonth(dayDate)
    return JSON.stringify(actualDay) === JSON.stringify(getTodayDayAndMonth)
  }
  )
  console.log('coincidence', coincidence)

  return coincidence
}

export { defineToday }
