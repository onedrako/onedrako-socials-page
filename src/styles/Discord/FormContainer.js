import styled from 'styled-components'

const FormContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 1400px) {
  grid-template-areas: 'instructions form'
                              "image image"
                              "download download";
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

`
export { FormContainer }
