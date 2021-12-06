import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavItem } from './NavItem'
import { StyledNav } from '../../styles/Nav/StyledNav'

const paths = {
  home: { path: '/', name: 'Home', url: 'https://cdn-icons-png.flaticon.com/512/609/609803.png' },
  chill: { path: 'chill', name: 'Chill', url: 'https://image.flaticon.com/icons/png/512/3291/3291659.png' },
  productividad: { path: 'productividad', name: 'Productividad', url: 'https://image.flaticon.com/icons/png/512/3291/3291659.png' },
  discord: { path: 'discord', name: 'Discord', url: 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png' }
}

// const reducer = (state, action) => {
//   switch (action.type) {
//     // case "/":
//     //   return [paths.productividad, paths.chill, paths.discord]
//     case '/productividad':
//       return [paths.home, paths.chill, paths.discord]
//     case '/chill':
//       return [paths.home, paths.productividad, paths.discord]
//     case '/discord':
//       return [paths.home, paths.chill, paths.productividad]
//     default:
//       return state
//   }
// }

const NavBarComponent = () => {
  const location = useLocation()
  // const path = location.pathname
  // const [state, dispatch] = useReducer(reducer, paths.home)

  // console.log(location.pathname)
  return (
    <>
      <StyledNav>
        {(location.pathname === '/') && <NavItem routes={[paths.productividad, paths.chill, paths.discord]} />}
        {(location.pathname.includes('/productividad')) && <NavItem routes={[paths.home, paths.chill, paths.discord]} />}
        {(location.pathname.includes('/chill')) && <NavItem routes={[paths.home, paths.productividad, paths.discord]} />}
        {(location.pathname.includes('/discord')) && <NavItem routes={[paths.home, paths.productividad, paths.chill]} />}
      </StyledNav>
    </>
  )
}

export { NavBarComponent }
