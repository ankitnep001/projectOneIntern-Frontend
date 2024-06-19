import { Outlet } from 'react-router-dom'
import Logo from '../molecules/Logo'

const AuthTemplate = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-100'>
      <div className='flex flex-col items-center mb-5'>
        <Logo />
        <p className='font-bold text-sm md:text-md'>Mid-baneshwor, Kathmandu</p>
      </div>
      <div className=' bg-white rounded-md shadow-md'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthTemplate
