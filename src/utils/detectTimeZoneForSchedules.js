const timeDifference = new Date().getTimezoneOffset() / 60
console.log(timeDifference)
const season = 'Invierno'
let zone

const detectTimeZoneForSchedules = () => {
  switch (timeDifference) {
    case -1:
      zone = `${season}-ES`
      return zone
    case 0:
      zone = `${season}-PT`
      return zone
    case 3:
      zone = `${season}-AR`
      return zone
    case 4:
      zone = `${season}-BO`
      return zone
    case 5:
      zone = `${season}-CO`
      return zone
    case 6:
      zone = `${season}-MX`
      return zone
    case 9:
      zone = `${season}-AK`
      return zone
    default:
      zone = 'NOT FOUND'
      return zone
  }
}

export { detectTimeZoneForSchedules }
