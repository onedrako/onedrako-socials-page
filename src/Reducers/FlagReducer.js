const initialUrl = { url: '' }

const reducer = (state, action) => {
  switch (action.type) {
    case 'Alemania':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330523.png' }
    case 'Argentina':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330487.png' }
    case 'Bolivia':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330535.png' }
    case 'Brasil':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330430.png' }
    case 'Chile':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330554.png' }
    case 'Colombia':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330508.png' }
    case 'Ecuador':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330581.png' }
    case 'El Salvador':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330670.png' }
    case 'España':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330557.png' }
    case 'Estados Unidos':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330459.png' }
    case 'Guatemala':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330587.png' }
    case 'Honduras':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330661.png' }
    case 'México':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330433.png' }
    case 'Panamá':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330579.png' }
    case 'Perú':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330497.png' }
    case 'Portugal':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330461.png' }
    case 'República Dominicana':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330638.png' }
    case 'Uruguay':
      return { url: 'https://cdn-icons-png.flaticon.com/512/330/330597.png' }
    case 'Venezuela':
      return { url: 'https://image.flaticon.com/icons/png/512/330/330546.png' }
    default:
      return state
  }
}

export { initialUrl, reducer }
