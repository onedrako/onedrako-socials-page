import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 45px;
  min-width: 250px;
`

const Img = styled.img`
    width: 25px;
    object-fit: contain;
    margin-right: 10px;
`
const P = styled.p`
  display: inline-block;
  color: red;
  margin-bottom: 0;
  width: 90%;
`

export { Img, P, Div }
