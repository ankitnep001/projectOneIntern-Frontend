
import { image } from '@config/constant/image'
import useLang from '@hooks/useLang'
import { LanguageEnum } from '@type/global.types'


const LanguageToggle = () => {

    const { lang, setLang } = useLang()

    const switchLanguage = () => {
        setLang(lang === LanguageEnum.en ? LanguageEnum.ne : LanguageEnum.en)
    }

    return (
        <div className='border-2 border-gray-400 rounded-full flex items-center justify-center  w-10 h-8 overflow-hidden' onClick={switchLanguage}>
            <img src={lang === 'en' ? image?.usaFlag : image?.nepalFlag} alt="" />
        </div>
    )
}

export default LanguageToggle
