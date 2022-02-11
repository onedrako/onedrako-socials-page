import styled from 'styled-components'

const Section = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AboutButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  margin-right: 15px;
  font-size: 1.5rem;
  border: solid 1px #fff; 
  cursor: pointer;
  background-color: #171717;
  color: #fff;
  &:hover{
    background-color: #44a363;
  }
`
export { Section, AboutButton }
