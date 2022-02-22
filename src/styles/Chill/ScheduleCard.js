import styled from 'styled-components'

const ScheduleCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  place-items: center;
  margin-bottom: 20px;
  & p{
    @media (min-width: 485px) {
      font-size: 1.4rem;
    }
    @media (min-width: 1000px) {
      font-size: 1.6rem;
    }
  }
  & img{
    width: 35px;
    @media (min-width: 485px) {
      width: 50px;
    }
    @media (min-width: 800px) {
      width: 65px;
    }
    @media (min-width: 1000px) {
      width: 80px;
    }
  }
  @media (min-width: 750px) {
    grid-template-columns: 60% 40%;
  }
`
const FlagsContainer = styled.div`
  display: grid;
  grid-column-gap: 3px;
  grid-template-columns: repeat(2, 1fr);
  direction: rtl
  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 6px;
  }
`

const SchedulesPerCountry = styled.div`
  display: grid;
  gap: 15px;
  width: 100%;
  justify-content: start;
  text-align: center;
`

export { ScheduleCardContainer, FlagsContainer, SchedulesPerCountry }
