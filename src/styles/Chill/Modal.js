import styled from 'styled-components'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const ModalStructure = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  /* position: absolute; */
  & h2{
    text-align: center;
    margin-bottom: 10px;
  }
  & h3{
    text-align: center;
    margin: 20px 0 15px 0;
  }
  & p{
    margin-bottom: 10px;
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


`

const PlatformSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  & div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    @media (min-width: 500px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 600px;
      margin: 0 auto;
    }
  }
  & img{
    width: 50px;
    margin: 0 auto;
    @media (min-width: 800px) {
      width: 70px;
    @media (min-width: 1200px) {
      width: 100px;
    }
  }
`

export {
  ModalStructure,

  LeftArrow,
  RightArrow,

  GameImageSection,
  PlatformSection
}
