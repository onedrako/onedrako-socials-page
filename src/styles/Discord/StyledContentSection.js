import styled from 'styled-components'

const ContentSection = styled.div`
  width: 240px;

  @media (min-width: 730px) {
    width: 500px;
}

@media (min-width: 900px) {
    width: 580px;
}

@media (min-width: 1200px) {
    width: 800px;
}

  @media (min-width: 1400px) {
    width: 1300px;
}
`

export { ContentSection }
