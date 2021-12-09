import styled from 'styled-components'

const StyledDivForEmojiAndTitle = styled.div`
  display: grid;
  grid-template-columns:30px 1fr;
  width: 100%;
  
  & h2{
    display: flex;
    width: 100%;
  }

  & span{
    margin-right: 15px;
  }
`
export { StyledDivForEmojiAndTitle }
