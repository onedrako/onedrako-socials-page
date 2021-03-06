import styled, { keyframes } from 'styled-components'
import { ImTicket } from 'react-icons/im'

const MoveTicket = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(15deg);
  }

  50%{
    transform: rotate(-15deg);
  }

  75%{
    transform: rotate(15deg);
  }
  100%{
    transform: rotate(0deg);
  }
`
const GameSchedulesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    }
  `

const GameDayCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin : 0 auto;
  width : 100%;
  `

const CardContainer = styled.div.attrs({
  shadowColor: props => {
    if (props.shortName === 'ESP') {
      return 'rgba(145, 70, 255, 0.75)'
    } else {
      return 'rgba(0, 0, 0, 0.5)'
    }
  }
})`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 80%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  margin-top: 20px;
  filter: grayscale(${props => props.status});
  -webkit-box-shadow: 8px -6px 5px 0px ${props => props.shadowColor};
  -moz-box-shadow: 8px -6px 5px 0px ${props => props.shadowColor};
  box-shadow: 8px -6px 5px 0px ${props => props.shadowColor};
  border-radius: 0 30px 0 0;
  @media (min-width: 550px) {
      max-width: 400px
    }
  &:hover{
    filter: grayscale(0%);
    transition: all 0.5s ease-in-out;
    transform: scale(1.05);
  }
  
  & img{
    border-radius: 0 30px 0 0;
    width: 100%;
    height: 120px;
    object-fit: cover;
    cursor: pointer;
    @media (min-width: 425px) {
      height: 135px;
    }
    @media (min-width: 550px) {
      height: 150px;
      max-width: 400px
    }
    /* @media (min-width: 1000px) {
      height: 200px;
      max-width: 500px
    } */
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
    z-index: 2;
    bottom : 0;
    background-color: rgba(0,0,0,0.6);
    font-size: 1rem;
    /* pointer-events:none; */
    /* &:not(div > svg):hover{
      pointer-events: none;
    } */
    @media (min-width: 550px) {
      max-width: 400px
    }
    /* @media (min-width: 1000px) {
      max-width: 500px
    } */
    & div {
      display: flex;
      place-items: center;
      width: 35%;
      & span{
        width: 15px;
        margin-right: 10px;
        cursor: pointer;
        @media (min-width: 550px) {
          width: 25px;
          & svg{
            font-size: 1.5rem;
          }
        }
        & :hover{
          animation: ${MoveTicket} 1s ;
        }
        
      }
    }
  }
  `

const SpecialEventP = styled.p`
    position: absolute;
    z-index: 2;
    background-color: black;
    width: 100%;
    height: 20%;
    border-radius: 0 20px 0 0;
    font-weight: bold;
    text-align: center;
    display: flex;
    place-items: center;
    justify-content: center;
`

const SponsorIcon = styled(ImTicket)`
    filter: grayscale(${props => props.sponsor});
  margin-right: 5px;
  color: #d8b100;
  font-size: 1.2rem;
`

const appear = keyframes`
  from {
    transform : translateY(-120px);
  }
  to {
    transform : translateY(0);
  }
`

const ExtraInfo = styled.div.attrs({
  shadowColor: props => {
    if (props.shortName === 'ESP') {
      return 'rgba(145, 70, 255, 0.75)'
    } else {
      return 'rgba(0, 0, 0, 0.5)'
    }
  }
})`
  display: grid;
  gap: 15px;
  width: 80%;
  align-items: center;
  background-color: #171717;
  padding: 10px;
  text-align: center;
  border-radius: 0 0 30px 30px;
  animation: ${appear} 1s ease-in-out;
  -webkit-box-shadow: 8px -6px 5px 0px ${props => props.shadowColor};
  -moz-box-shadow: 8px -6px 5px 0px ${props => props.shadowColor};
  box-shadow: 8px -6px 5px 0px ${props => props.shadowColor};
  @media (min-width: 550px) {
    max-width: 400px
    }
  /* & div {
    display: grid;
    justify-content: center;
    align-items: center;
    margin : 10px auto;
    width: 90%;
    margin-right: 10px;
    & img {
      display: block;
      justify-self: center;
      width: 30%;
      margin: 5px 0;
    }
  } */
  & p {
    font-size: 1rem;
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 10px;
    width: 80%;
    margin: 0 auto;
    @media (min-width: 550px) {
      font-size: 1.2rem;
    }
  }
`

const PlatformsStyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px; 
  align-items: center;
  margin-top: 15px;
  background-color: #2b2e2e;
  border-radius: 30px;
  height: 50px;
  @media (min-width: 550px) {
    padding: 0px 40px; 
  }
  @media (min-width: 1100px) {
    padding: 0px 20px; 
  }
  & img{
      height: 70%;
      width: 20%;
      margin: 5px 0;
      object-fit: cover;
  }
`

// const NotAvailable = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 0 29px 0 0 ;
//   position: absolute;
//   z-index: 1;
//   background-color: black;
//   opacity: 0.7;
// `

export {
  GameSchedulesContainer,

  GameDayCardContainer,
  CardContainer,
  MainInfoContainer,
  SpecialEventP,
  SponsorIcon,
  // NotAvailable,

  PlatformsStyledDiv,

  ExtraInfo
}
