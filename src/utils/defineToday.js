const getDayAndMonth = () => {
  const date = new Date(Date.now())
  const day = date.getDate()
  const month = date.getMonth()
  return { day, month }
}

const defineToday = (days) => {
  const actualDay = getDayAndMonth()

  const coincidence = days.filter(gameDay => {
    const { date } = gameDay
    const dayDate = new Date(date)
    const getTodayDayAndMonth = getDayAndMonth(dayDate)
    console.log(getTodayDayAndMonth)
    return JSON.stringify(actualDay) === JSON.stringify(getTodayDayAndMonth)
  }
  )
  return coincidence
}

export { defineToday }
