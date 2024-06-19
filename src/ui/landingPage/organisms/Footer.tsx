import Logo from '@ui/common/molecules/Logo'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-50'>
      <footer className='px-10 py-2 flex flex-col md:flex-row gap-y-10 justify-between  '>
        <div>
          <Logo />
          <p className='font-bold'>Mid-baneshwor, Kathmandu</p>
          <p className='w-full max-w-60 text-left lg:text-justify'>
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro possimus quas velit beatae officia
            architecto magni voluptate dicta eos perferendis"
          </p>
        </div>

        <div>
          <h1 className='text-lg md:text-xl lg:text-2xl font-bold  tracking-wide uppercase relative'>Quick Links</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='group'>
          <h1 className='text-2xl'>Location</h1>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.7916168574648!2d85.33502426159647!3d27.696720159975246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1922adf46107%3A0x14bad80620f24e14!2sCliff%20Byte!5e0!3m2!1sen!2snp!4v1693993748570!5m2!1sen!2snp'
            width='100%'
            height='150'
            loading='lazy'
            className='group-hover:opacity-90'
          ></iframe>
        </div>
      </footer>
      <div className='my-2'>
        <div className='flex items-center my-4'>
          <div className='flex-grow border-t border-gray-300'></div>
          <span className='mx-4 text-center'>Developed by Ankit Nepal</span>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        <div className='flex items-center justify-center gap-x-5 mb-2  '>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>

        <div className='text-center'>2024 Ankit Nepal. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer
