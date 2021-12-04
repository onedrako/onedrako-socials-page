import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  & > li {
    width: 150px;
    list-style: none;
  }
  & > li > a {
    text-decoration: none;
  }

`

const StyledNavItems = styled(NavLink)`
  display: flex;
  flex-direction: row;
  place-content: center;
  padding: 10px;
  
  & > img {
    height: 20px;
    margin-right: 5px;
  }

  & > p {
    color: #fff;
  }
`

export { StyledUl, StyledNavItems }
