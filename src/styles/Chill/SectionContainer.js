import styled from 'styled-components'

const Section = styled.section`
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 3px solid #171717;
  & > *{
    margin-bottom: 10px;
  }
  & h2{
    margin-bottom: 20px;
  }
  @media (min-width: 1100px) {
    max-width: 1200px;
    padding: 50px;
    margin: 0 auto;
  }
`

export { Section }
