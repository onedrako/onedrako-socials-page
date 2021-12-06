import styled from 'styled-components'

const StyledTitles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 25px 0px; 

  & h1{
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }
  
  & > img{
    width: 64px;
    margin-right: 10px;
  }
`

const StyledSubTitles = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 25px 0px;

  & h2{
    text-align: center;
  }
  
  & > img{
    width: 32px;
    object-fit: contain;
    margin-right: 10px;
  }
`

export { StyledSubTitles, StyledTitles }
