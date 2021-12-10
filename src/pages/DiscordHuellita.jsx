import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { downloadCapture } from '../utils/manageCapture'

import { Titles } from '../components/Discord/Titles'
import { FormHuellita } from '../components/Discord/FormHuellita'
import { ResultsSection } from '../components/Discord/ResultsSection'

import { StyledFormSection, StyledP, StyledLi } from '../styles/Discord/StyledFormSection'
import { StyledTitles } from '../styles/Discord/StyledTitles'
import { FormContainer } from '../styles/Discord/FormContainer'
import { StyledContainerForDownload, StyledButton, DownloadIcon } from '../styles/Discord/StyledContainerForDownload'
import { LanguagesContainer, ButtonContainer, FlagImg } from '../styles/Discord/LanguagesContainer'

const DiscordHuellita = () => {
  const [visible, setVisible] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [languageSelect, setLanguageSelect] = useState('es')
  const [t, i18n] = useTranslation('global')

  return (
    <FormContainer>
      <StyledFormSection margin='25px auto'>

        <LanguagesContainer>
          <h3>Language:</h3>
          <ButtonContainer
            lang={languageSelect} name='es'
            onClick={() => {
              i18n.changeLanguage('es')
              setLanguageSelect('es')
            }}
          >
            <FlagImg src='https://cdn-icons-png.flaticon.com/512/330/330557.png' alt='Spain Flag' />
            ES
          </ButtonContainer>
          <ButtonContainer
            lang={languageSelect} name='en'
            onClick={() => {
              i18n.changeLanguage('en')
              setLanguageSelect('en')
            }}
          >
            <FlagImg src='https://cdn-icons-png.flaticon.com/512/330/330425.png' alt='England Flag' />
            EN
          </ButtonContainer>
          <ButtonContainer
            lang={languageSelect} name='pt'
            onClick={() => {
              i18n.changeLanguage('pt')
              setLanguageSelect('pt')
            }}
          >
            <FlagImg src='https://cdn-icons-png.flaticon.com/512/330/330461.png' alt='Portugal Flag' />
            PT
          </ButtonContainer>
        </LanguagesContainer>

        <StyledTitles>
          <img src='https://image.flaticon.com/icons/png/512/2626/2626288.png' alt='Discord' />
          <h1>{t('discord.huellitaForm.title')}</h1>
        </StyledTitles>
        <Titles title={t('discord.huellitaForm.instructionsTitle')} url='https://image.flaticon.com/icons/png/512/672/672634.png' />
        <StyledP>{t('discord.huellitaForm.motive1')}</StyledP>
        <StyledP>{t('discord.huellitaForm.motive2')}</StyledP>
        <StyledP>{t('discord.huellitaForm.motive3')}</StyledP>
        <Titles title={t('discord.huellitaForm.considerations')} url='https://image.flaticon.com/icons/png/512/2534/2534888.png' />
        <ol>
          <StyledLi>{t('discord.huellitaForm.consideration1')}</StyledLi>
          <StyledLi>{t('discord.huellitaForm.consideration2')}</StyledLi>
          <StyledLi>{t('discord.huellitaForm.consideration3')}</StyledLi>
          <StyledLi>{t('discord.huellitaForm.consideration4')}</StyledLi>
        </ol>
        <Titles title={t('discord.huellitaForm.works')} />
        <ol>
          <StyledLi>{t('discord.huellitaForm.work1')}</StyledLi>
          <StyledLi>{t('discord.huellitaForm.work2')}</StyledLi>
          <StyledLi>{t('discord.huellitaForm.work3')} </StyledLi>
        </ol>
      </StyledFormSection>

      <StyledFormSection margin='25px auto'>
        <StyledTitles>
          <img src='https://image.flaticon.com/icons/png/512/3157/3157914.png' alt='Imagen Formulario' />
          <h1>{t('discord.huellitaForm.formTitle')}</h1>
        </StyledTitles>
        <FormHuellita setVisible={setVisible} setDisabled={setDisabled} language={languageSelect} />
      </StyledFormSection>

      <ResultsSection id='capture' />

      {visible && (
        <StyledContainerForDownload id='downloadImg' disabled={disabled}>
          <label>
            {/* <StyledImg src='https://cdn-icons.flaticon.com/png/512/2550/premium/2550364.png?token=exp=1639069852~hmac=81608e5b3d2a98557263a5bb99582600' alt='download icon' /> */}
            <DownloadIcon />
            <StyledButton
              disabled={disabled} onClick={() => { downloadCapture() }}
              id='download-button'
            > {t('discord.huellitaForm.downloadButton')}
            </StyledButton>
          </label>
        </StyledContainerForDownload>
      )}

    </FormContainer>
  )
}

export { DiscordHuellita }
