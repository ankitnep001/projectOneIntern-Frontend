import { navbarLabel } from '@data/localization/landingPage/navbar'
import useLang from '@hooks/useLang'
import Button from '@ui/common/atoms/Button'
import LanguageToggle from '@ui/common/molecules/LanguageToggle'
import Logo from '@ui/common/molecules/Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { lang } = useLang()

  return (
    <nav className='flex justify-between items-center px-10 py-3 bg-[#E7F0FF] '>

      <div>
        <Logo />
      </div>

      <div className='flex items-center gap-x-2'>
        <div className='flex gap-x-2 items-center  '>
          <Link to='/auth/user'>
            <Button type='button' buttonText={navbarLabel.login[lang]} />
          </Link>

          <Link to='/auth/user/sign-up'>
            <Button type='button' buttonText={navbarLabel.signup[lang]} />
          </Link>
        </div>

        <div>
          <LanguageToggle />
        </div>
      </div>

    </nav>
  )
}

export default Navbar
