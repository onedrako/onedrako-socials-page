import styled from 'styled-components'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const ModalStructure = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  /* position: absolute; */
  @media (min-width: 900px) {
    width: 525px;
  }
  & h2{
    text-align: center;
    margin-bottom: 10px;
    
  }
  & h3{
    text-align: center;
    margin: 35px 0 15px 0;
  }
  & p{
    margin-bottom: 10px;
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 10px;
  }
  & li{
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 5px;
    text-align: center;
  }


  & button{
    margin-top: 10px;
    width: 120px;
    height: 40px;
    color: white;
    background-color: #9147ff;
    border: none;
    & a{
      color: white;
      text-decoration: none;
    }
  }
`

const LeftArrow = styled(BsFillArrowLeftCircleFill)`
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: 35%;
  left: 10px;
  @media (min-width: 500px) {
    width: 40px;
    height: 40px;
    top: 45%;
    left: 10px;
  }

`
const RightArrow = styled(BsFillArrowRightCircleFill)`
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  top: 35%;
  right: 10px;
  @media (min-width: 500px) {
    width: 40px;
    height: 40px;
    top: 45%;
  }
`

const ModalStructureForGameCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 900px) {
    width: 600px;
  }
  @media (min-width: 1200px) {
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image title-description " 
                        "description description"
                        "gameDays sponsors"
                        "platforms platforms ";
    grid-gap: 20px;
  }
  & h2{
    text-align: center;
    margin-bottom: 10px;
    
  }
  & h3{
    text-align: center;
    margin: 35px 0 15px 0;
  }
  & p{
    margin-bottom: 10px;
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 10px;
  }
  & ul{
    text-decoration: none;
  }
  & li{
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 5px;
    text-align: center;
  }
`

const PlatformSection = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  justify-content: center;
  @media (min-width: 900px) {
    grid-area: platforms;
  }
  & li{
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 5px;
  }
  & div{
    display: grid;
    width: 200px;
    grid-template-columns: 60% 40%;
    justify-content: center;
    align-items: center;
    background-color: #2b2e2e;
    border-radius: 30px;
    padding: 5px;
    @media (min-width: 900px) {
      width: 300px;
  }
    }

  & p{
    margin: 0 auto;
    
  }
  }
  & img{
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin: 0 auto;
    @media (min-width: 800px) {
      width: 70px;
    @media (min-width: 1200px) {
      width: 100px;
    }
  }
}
`

const GameImageSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & img{
    margin-top : 20px;
    width: 75%;
    object-fit: cover;
    @media (min-width: 500px) {
      width: 190px;
      height: 270px;
  }
  @media (min-width: 900px) {
    grid-area: Image;
  }
}
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    grid-area: title-description;
  }
`

const GameDaysDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    grid-area: gameDays;
  }
`

const PlatformsDiv = styled.div`
  display: flex;
  text-align: center;
  @media (min-width: 900px) {
    grid-area: platforms;
  }
`

const SponsorsDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 900px) {
    grid-area: sponsors;
  }
`

export {
  ModalStructure,

  LeftArrow,
  RightArrow,

  ModalStructureForGameCard,
  GameImageSection,
  PlatformSection,

  TitleDiv,
  GameDaysDiv,
  PlatformsDiv,
  SponsorsDiv
}
