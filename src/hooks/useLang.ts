

import { LanguageContext } from '@context/LanguageContext'
import { LanguageType } from '@type/global.types'
import { useContext } from 'react'

const useLang = () => {

    const contextValue = useContext(LanguageContext)


    const languageType: LanguageType = {
        lang: contextValue.lang,
        setLang: contextValue.setLang,
    }

    return languageType
}

export default useLang