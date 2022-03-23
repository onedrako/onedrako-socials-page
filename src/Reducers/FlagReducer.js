const initialUrl = { url: '' }

const reducer = (state, action) => {
  switch (action.type) {
    case 'Alemania':
      return { url: 'https://i.imgur.com/Etyp26g.png' }
    case 'Argentina':
      return { url: 'https://i.imgur.com/JWqPPUH.png' }
    case 'Bolivia':
      return { url: 'https://i.imgur.com/lTPXsJv.png' }
    case 'Brasil':
      return { url: 'https://i.imgur.com/Hsdhhao.png' }
    case 'Canada':
      return { url: 'https://i.imgur.com/1MC5lha.png' }
    case 'Chile':
      return { url: 'https://i.imgur.com/i2J0U9O.png' }
    case 'Colombia':
      return { url: 'https://i.imgur.com/S2lg1G5.png' }
    case 'Ecuador':
      return { url: 'https://i.imgur.com/f17iGbR.png' }
    case 'El Salvador':
      return { url: 'https://i.imgur.com/2a52wwN.png' }
    case 'España':
      return { url: 'https://i.imgur.com/zZgUXwJ.png' }
    case 'Estados Unidos':
      return { url: 'https://i.imgur.com/8XL6UNE.png' }
    case 'United Kingdom':
      return { url: 'https://i.imgur.com/FFt6bx8.png' }
    case 'United States':
      return { url: 'https://i.imgur.com/8XL6UNE.png' }
    case 'Guatemala':
      return { url: 'https://i.imgur.com/wcecY8i.png' }
    case 'Honduras':
      return { url: 'https://i.imgur.com/ZZu2yQE.png' }
    case 'Italia':
      return { url: 'https://i.imgur.com/QGTtkKH.png' }
    case 'México':
      return { url: 'https://i.imgur.com/bKtXJmQ.png' }
    case 'Panamá':
      return { url: 'https://i.imgur.com/WUgAUy7.png' }
    case 'Perú':
      return { url: 'https://i.imgur.com/x7FWfaK.png' }
    case 'Portugal':
      return { url: 'https://i.imgur.com/gOXC87U.png' }
    case 'Reino Unido':
      return { url: 'https://i.imgur.com/FFt6bx8.png' }
    case 'República Dominicana':
      return { url: 'https://i.imgur.com/FfVwyet.png' }
    case 'Uruguay':
      return { url: 'https://i.imgur.com/c3w7Acg.png' }
    case 'Venezuela':
      return { url: 'https://i.imgur.com/4FThef7.png' }
    default:
      return state
  }
}

export { initialUrl, reducer }
