import styled from 'styled-components'

const StyledContainerForDownload = styled.div.attrs(props => ({
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;

  & label{
    display: flex;
    justify-content: center;
    background-color: ${props => props.disabled ? '#000000' : '#4f4f4f'};
    opacity: ${props => props.disabled ? 0.1 : 1};  
    border-radius: 5px;
    width: 250px;
    height: 35px;
    cursor: pointer;
    align-items: center;
    font-size: 1.4rem;
    border-radius: 10px;

    &:hover{
    background-color: #44a363;
    }
  }
`

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

const StyledButton = styled.button`
  background-color: ${props => props.disabled ? '#000000' : '#4f4f4f'};
  border: none;
  color : #ffffff;
  font-size: 1.4rem;   
  cursor: pointer;
  &:hover{
    background-color: #44a363;
  }
`

export { StyledContainerForDownload, StyledImg, StyledButton }
