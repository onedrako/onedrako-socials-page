const defineStatus = (status, date) => {
  const today = Date.now()
  const gameDay = new Date(date)
  const dateToCompare = gameDay.setHours(gameDay.getHours() + 24)

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
