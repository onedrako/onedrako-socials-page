const getDayAndMonth = (date) => {
  const day = date.getDate()
  const month = date.getMonth()
  return { day, month }
}

const today = new Date(Date.now())

const defineToday = (days) => {
  const actualDay = getDayAndMonth(today)
  console.log(actualDay)

  return days.filter(gameDay => {
    const { date } = gameDay
    const dayDate = new Date(date)
    const compareDay = getDayAndMonth(dayDate)
    return JSON.stringify(actualDay) === JSON.stringify(compareDay)
  }
  )
}

// console.log(defineToday(gameDayData))

export { defineToday }
