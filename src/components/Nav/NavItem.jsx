import React from 'react'
import { StyledUl, StyledNavItems } from '../../styles/Nav/StyledNavItem'

const NavItem = ({ routes }) => {
  console.log(routes)
  return (
    <StyledUl>
      {routes.map(element => (
        <li key={element.name}>
          <StyledNavItems to={element.path}>
            <img src={element.url} alt={element.name} />
            <p>{element.name}</p>
          </StyledNavItems>
        </li>
      ))}
    </StyledUl>
  )
}

export { NavItem }
