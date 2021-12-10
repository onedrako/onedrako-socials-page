import styled from 'styled-components'
import { GoAlert } from 'react-icons/go'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 45px;
  min-width: 250px;
`
const P = styled.p`
  display: inline-block;
  color: red;
  margin-bottom: 0;
  width: 90%;
`
const Svg = styled(GoAlert)`
    width: 50px;
    object-fit: contain;
    /* margin-right: 10px; */
    color: red;
`

export { P, Div, Svg }
