import styled from 'styled-components'

const LanguagesContainer = styled.div`
  display: grid;
  width: 60%;
  height: 50px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;

  margin: 0 auto 20px auto;
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 0 10px ; 

  @media only screen and (max-width: 762px)  {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 95px;
    padding: 5px;
    width: 60%;
  }

  @media (max-width: 485px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    height: 160px;
    padding: 10px;
    width: 80%;
  }
`

const ButtonContainer = styled.span.attrs(props => {
})`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    background-color: ${props => props.lang === props.name ? '#44a363' : '#4f4f4f'};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #44a363;
    }
`

const FlagImg = styled.img`
  width: 30px;
  margin-right: 10px;
`

const LanguageButton = styled.button`
  color: #fff;
  font-size: 14px;

`

export { LanguagesContainer, ButtonContainer, FlagImg, LanguageButton }
