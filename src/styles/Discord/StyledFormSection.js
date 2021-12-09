import styled from 'styled-components'
import { defineFontColor } from '../../utils/defineFontColor'

const StyledP = styled.p`
    margin-bottom: 15px;
`

const StyledLi = styled.li`
    margin-bottom: 15px;
`

const StyledFormSection = styled.section.attrs(props => ({
  backgroundColor: props.backgroundColor || '#212525'
}))`
width: 90%;
display: grid;
padding: 20px;
margin: 20px;
background: ${props => {
  return props.backgroundColor === '#000000' ? '#212525' : props.backgroundColor
}};
color : ${props => defineFontColor(props.backgroundColor)};
border-radius: 15px;
margin: 25px auto;
justify-content: center;
align-items: center;
box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.4);

& ol{
  padding: 0 10px 0 20px;
}

& button{
  display: block;
  background: #0b74fe;
  color: white;
  border: none;
  height: 60px;
  height: 30px;
  width: 200px;
  border-radius: 10px;
  font-size: 18px;
  margin: 35px auto 0 auto;
}

& button:hover{
  background: #24c6db;
  cursor: pointer;
}

@media (min-width: 750px) {
  width: 650px;
}
`

export { StyledFormSection, StyledP, StyledLi }
