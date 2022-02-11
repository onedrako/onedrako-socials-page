import styled from 'styled-components'

const StyledGameCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-bottom: 30px;
`

const BackFaceContainer = styled.div`
  margin-top: 15px;
  width: 120px;
  height: 160px;
  transform-style: preserve-3d;
  position: relative;
  /* filter: grayscale(100%); */
  /* filter: grayscale(${props => props.state ? 100 : 0}); */
  /* background: #00f; */
  &:hover{
    transform: rotateY(180deg);
    transition: 1.5s;
  }
`

const Face = styled.div`
  width: 120px;
  height: 160px;
  border-radius: 20px;
  position: absolute;
  backface-visibility: hidden;
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
