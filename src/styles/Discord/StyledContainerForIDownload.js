import styled from 'styled-components'

const StyledContainerForIDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;

  & label{
    display: flex;
    justify-content: center;
    background-color: #000000;
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
`

export { StyledContainerForIDownload, StyledImg }
