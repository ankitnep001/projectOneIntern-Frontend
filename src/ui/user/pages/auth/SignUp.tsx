import Button from '@ui/common/atoms/Button'
import InputField from '@ui/common/atoms/InputField'
import Label from '@ui/common/atoms/Label'
import { AiOutlineLock } from 'react-icons/ai'
import { FiPhone, FiUser } from 'react-icons/fi'
import { IoArrowBack, IoMailUnreadOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <div className='px-4 py-4  w-[98vw] md:w-[70vw] lg:w-[41vw]'>
      <form className=''>
        <div className='w-fit flex justify-end items-center px-2 mb-2 cursor-pointer hover:bg-[#1a496d] bg-[#255d88] rounded-md text-white ' onClick={goBack}>
          <IoArrowBack />
          <Button type={'button'} buttonText={'Go Back'} />
        </div>
        <h1 className='text-[#255d88] font-bold mb-3'>User Login</h1>

        <div className='w-full'>
          {/* Name */}
          <div className=' flex flex-col md:flex-row gap-x-4'>
            {/* First Name */}
            <div className='relative'>
              <Label name={'firstName'} label={'First Name'} required={true} />
              <FiUser className='absolute left-3 top-[39px] ' />
              <InputField name={'firstName'} type={'text'} placeholder={'Enter your First Name'} />
            </div>

            {/* Middle Name */}
            <div className='relative'>
              <Label name={'middleName'} label={'Middle Name'} />
              <FiUser className='absolute left-3 top-[39px] ' />
              <InputField name={'middleName'} type={'text'} placeholder={'Enter your Middle Name'} />
            </div>

            {/* Last Name */}
            <div className='relative'>
              <Label name={'lastName'} label={'Last Name'} required={true} />
              <FiUser className='absolute left-3 top-[39px] ' />
              <InputField name={'lastName'} type={'text'} placeholder={'Enter your Last Name'} />
            </div>
          </div>

          {/* Email and Mobile number */}
          <div className='flex flex-col md:flex-row gap-x-4 '>
            <div className='relative w-full'>
              <Label name={'email'} label={'Email'} required={true} />
              <IoMailUnreadOutline className='absolute left-3 top-[38px] ' />
              <InputField name={'email'} type={'email'} autocomplete='on' placeholder={'Enter your Email'} />
            </div>

            <div className='relative w-full'>
              <Label name={'phoneNumber'} label={'Mobile Number'} required={true} />
              <FiPhone className='absolute left-3 top-[39px]' />
              <InputField
                name={'phoneNumber'}
                type={'tel'}
                placeholder={'Enter your Mobile Number'}
              />
            </div>
          </div>

          {/* Password */}
          <div className='flex flex-col md:flex-row gap-x-4 '>
            <div className='relative w-full'>
              <Label name={'password'} label={'Password'} required={true} />
              <AiOutlineLock className='absolute left-3 top-[38px]' />
              <InputField name={'password'} type={'password'} placeholder={'Password'} />
            </div>

            <div className='relative w-full'>
              <Label name={'confirmPassword'} label={'Confirm Password'} required={true} />
              <AiOutlineLock className='absolute left-3 top-[38px]' />
              <InputField
                name={'confirmPassword'}
                type={'password'}
                placeholder={'Confirm Password'}
              />
            </div>
          </div>

          {/* Button */}
          <div className='hover:bg-[#1a496d] bg-[#255d88] rounded-md cursor-pointer text-white my-2  w-full self-center'>
            <Button type={'submit'} buttonText={'Sign Up'} />
          </div>
        </div>
      </form>
      <div className='flex'>
        <p className=''>Already have an account? </p>&nbsp;
        <Link to='/auth/user'>
          <span className='text-[#255d88] font-bold'>Login </span>
        </Link>
      </div>

    </div>
  )
}

export default SignUp
