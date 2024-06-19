import Footer from '@ui/landingPage/organisms/Footer'
import Navbar from '@ui/landingPage/organisms/Navbar'
import { Outlet } from 'react-router-dom'

const LandingPageTemplate = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex  flex-grow '>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPageTemplate
