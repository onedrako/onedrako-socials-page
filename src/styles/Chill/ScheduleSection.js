import styled from 'styled-components'

const NextStreamDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  align-items: center;
  & > span{
    margin-top: 5px;
    font-size: 2rem;
    background-color: #171717;
    width: 250px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    -webkit-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.75);
    @media (min-width: 550px) {
      width: 350px;
    }
    @media (min-width: 1200px) {
      width: 600px;
      font-size: 3rem;
      margin: 15px auto 35px auto;
    }
  }
`

export { NextStreamDiv }
