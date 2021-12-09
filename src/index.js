import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import { AppProvider } from './context/AppContext'

import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'
import globalPt from './translations/pt/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    },
    pt: {
      global: globalPt
    }
  }
})

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('root')
)
