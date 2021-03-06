import styled from 'styled-components'

const StyledDivision = styled.div`
margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin : 15px auto;

  & input, select, textarea{
    margin-top: 10px;
    width: 100%;
  }

  & select{
    font-size: 1em;
  }

  & textarea{
    height: 80px;
    padding: 10px;
    font-size: 1rem;
  }

`
export { StyledDivision }
