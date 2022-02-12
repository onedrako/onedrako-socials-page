import styled from 'styled-components'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const ModalStructure = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  & h2{
    text-align: center;
    margin-bottom: 10px;
  }
  & h3{
    text-align: center;
    margin: 15px 0 10px 0;
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

`
const RightArrow = styled(BsFillArrowRightCircleFill)`

`

export { ModalStructure, LeftArrow, RightArrow }
