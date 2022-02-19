import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  grid-template-columns: 100px minmax(120px, 320px);
  grid-template-areas: "flag userName";
  border-bottom: 1px solid #ffffff;
  justify-self: center;
  justify-content: center;
  align-items: center;
  margin: 0px;
  overflow: hidden;
  margin-bottom: 15px;

  & img {
    grid-area: flag;
    width: 85px;
    object-fit: contain;
    margin-right: 20px;
  }

  & > div {
    margin-left: 20px;
    grid-area: userName;
  }

  & > div > h2{
    text-align: left;
    display: block;
  }

  & > div >  p{
    text-align: left;
    display: block;
    margin-top: 5px;
  }

`
export { StyledDiv }
