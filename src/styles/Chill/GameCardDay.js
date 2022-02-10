import styled from 'styled-components'
import { ImTicket } from 'react-icons/im'

const GameDayCardContainer = styled.div`
  display: flex;
  place-items: center;
  
  `

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  & img{
    border-radius: 0 30px 0 0;
  }
  & :hover{
    transition: all 0.5s ease-in-out;
    transform: scale(1.05);
  }
  `
const MainInfoContainer = styled.div`
    display: flex;
    height: 35%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    position: absolute;
    bottom : 0;
    background-color: rgba(0,0,0,0.6);
    font-size: 1rem;
    & div {
      display: flex;
      place-items: center;
    }
  }
  `

const SponsorIcon = styled(ImTicket)`
  margin-right: 5px;
  color: #d8b100;
`

const MainInfo = styled.div`
`

export {
  GameDayCardContainer,
  CardContainer,
  MainInfoContainer,
  SponsorIcon
}
