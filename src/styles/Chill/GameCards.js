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
  cursor: pointer;
  -webkit-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
  box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
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
  display: grid;
  grid-template-rows: 25% 40% 25%; 
  gap: 3px;
  justify-content: center;
  align-items: center;
  background: #171717;
  transition: 3s;
  transform: rotateY(180deg);
  padding: 5px;
  text-align: center;
  overflow: hidden;
  height: 100%;
  & p {
    width: 100%;
    height: 30px;
  }
  & div{
    display: grid;
    grid-template-columns: repeat(${props => props.platformItems >= 2 ? 2 : 1}, 1fr);
    gap: 5px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    & img{
      width: ${props => props.platformItems >= 2 ? 90 : 60}%;
      height: ${props => props.platformItems >= 2 ? 50 : 50}px;
      align-self: center;
      object-fit: contain;
      justify-self: center;
      background-color: #2b2e2e;
      padding: 2px;
      border-radius: 10px;
    }
  } 
  & svg{
    justify-self: center;
  }
  }
  & > *{
    margin-bottom: 5px;
  }
`

export { BackFaceContainer, FrontCard, BackCard, StyledGameCardContainer }
