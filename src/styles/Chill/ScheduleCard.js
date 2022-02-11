import styled from 'styled-components'

const ScheduleCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 65% 35%;
  place-items: center;
  margin-bottom: 20px;
  & img{
    width: 35px;
  }
`
const FlagsContainer = styled.div`
  display: grid;
  grid-column-gap: 3px;
  grid-template-columns: repeat(4, 1fr);
  direction: rtl
`

const SchedulesPerCountry = styled.div`
  display: grid;
  gap: 10px;
`

export { ScheduleCardContainer, FlagsContainer, SchedulesPerCountry }
