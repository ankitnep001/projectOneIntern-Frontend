import { navbarLabel } from "@data/localization/landingPage/navbar"
import useLang from "@hooks/useLang"
const Logo = () => {
  const { lang } = useLang()

  return (
    <div className='flex items-center'>
      <p className='text-lg md:text-xl lg:text-2xl font-bold  tracking-wide uppercase relative'>
        <span className='text-2xl md:text-3xl lg:text-4xl'>{navbarLabel.logo1[lang]}</span>
        {navbarLabel.logo2[lang]}
      </p>
    </div>
  )
}

export default Logo
