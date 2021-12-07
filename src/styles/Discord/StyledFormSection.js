import styled from 'styled-components'

const StyledFormSection = styled.section`
width: 90%;
display: grid;
padding: 20px;
margin: 20px;
background: #212525;
border-radius: 15px;
margin: 25px auto;
justify-content: center;
align-items: center;

& ol{
  padding: 0 10px 0 20px;
}

& button{
  display: block;
  background: #0b74fe;
  color: white;
  border: none;
  height: 30px;
  width: 175px;
  font-size: 18px;
  margin: 35px auto 0 auto;
}

& button:hover{
  background: #0b81fe;
  cursor: pointer;
}
`

export { StyledFormSection }
