import styled from 'styled-components'

const StyledGameCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-bottom: 30px;
  @media (min-width: 450px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 570px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 740px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 920px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const BackFaceContainer = styled.div`
  margin-top: 15px;
  width: 120px;
  height: 160px;
  transform-style: preserve-3d;
  position: relative;
  -webkit-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
  border-radius: 20px;
  &:hover{
    transform: rotateY(180deg);
    transition: 1.5s;
  }
  @media (min-width: 1200px) {
    width: 140px;
    height: 190px;
  }
  @media (min-width: 1400px) {
    width: 170px;
    height: 240px;
  }
`

const Face = styled.div`
  width: 120px;
  height: 160px;
  border-radius: 20px;
  position: absolute;
  backface-visibility: hidden;
  @media (min-width: 1200px) {
    width: 140px;
    height: 190px;
  }
    @media (min-width: 1400px) {
    width: 170px;
    height: 240px;
  }
`

const FrontCard = styled(Face)`
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    position: relative;
    filter: grayscale(${props => props.available});
  & h3{
    position: absolute;
  }
`

const BackCard = styled(Face)`
  background: #171717;
  transition: 3s;
  transform: rotateY(180deg);
  padding: 10px;
  text-align: center;  
  & img{
    width: 45%;
  }
  & > *{
    margin-bottom: 5px;
  }
}
`

export { BackFaceContainer, FrontCard, BackCard, StyledGameCardContainer }
