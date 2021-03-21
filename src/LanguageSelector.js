import React from 'react'
import { useTranslation } from 'react-i18next'
import './i18n';


const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked />  {t('title')}
      <input type="radio" value="fr" name="language"/>  {t('title')}
    </div>
  )
}

export default LanguageSelector