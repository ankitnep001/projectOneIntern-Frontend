import { projectLabel } from '@config/constant/project'
import useLang from '@hooks/useLang'
import { Outlet } from 'react-router-dom'
import Logo from '../molecules/Logo'

const AuthTemplate = () => {
  const { lang } = useLang()
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-100'>
      <div className='flex flex-col items-center mb-5'>
        <Logo />
        <p className='font-bold text-sm md:text-md'>{projectLabel.address[lang]}</p>
      </div>
      <div className=' bg-white rounded-md shadow-md'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthTemplate
