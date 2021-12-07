import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
`

const Img = styled.img`
    width: 25px;
    object-fit: contain;
    margin-right: 10px;
`
const P = styled.p`
  color: red;
  margin-bottom: 0;
`

export { Img, P, Div }
