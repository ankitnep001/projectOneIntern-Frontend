import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-50'>
      <div className='my-2'>
        <div className='flex items-center my-4'>
          <div className='flex-grow border-t border-gray-300'></div>
          <span className='mx-4 text-center'>Developed by Ankit Nepal</span>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        <div className='flex items-center justify-center gap-x-5 mb-2   '>
          <FaFacebookF className='cursor-pointer' />
          <FaInstagram className='cursor-pointer' />
          <FaTwitter className='cursor-pointer' />
        </div>
        <div className='text-center'>2024 Ankit Nepal. All Rights Reserved.</div>
      </div>
    </footer>


  )
}

export default Footer
