import { authLabel } from '@data/localization/common/auth'
import useLang from '@hooks/useLang'
import Button from '@ui/common/atoms/Button'
import InputField from '@ui/common/atoms/InputField'
import Label from '@ui/common/atoms/Label'
import { AiOutlineLock } from 'react-icons/ai'
import { FiPhone, FiUser } from 'react-icons/fi'
import { IoArrowBack, IoMailUnreadOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/'); // Navigate back one step in history
  };

  return (
    <div className='px-4 py-4  w-[98vw] md:w-[70vw] lg:w-[41vw]'>
      <form className=''>
        <div className='w-fit pb-2'>
          <Button type={'button'} buttonText={authLabel.goBack[lang]} icon={<IoArrowBack />} onClick={goBack} />
        </div>
        <h1 className='text-[#255d88] font-bold mb-3'>{authLabel.userSignup[lang]}</h1>

        <div className='w-full'>
          {/* Name */}
          <div className=' flex flex-col md:flex-row gap-x-4'>
            {/* First Name */}
            <div className='relative'>
              <Label name={'firstName'} label={authLabel.firstName[lang]} required={true} />
              <FiUser className='absolute left-3 top-[39px] ' />
              <InputField name={'firstName'} type={'text'} placeholder={'Enter your First Name'} />
            </div>

            {/* Middle Name */}
            <div className='relative'>
              <Label name={'middleName'} label={authLabel.middleName[lang]} />
              <FiUser className='absolute left-3 top-[39px] ' />
              <InputField name={'middleName'} type={'text'} placeholder={'Enter your Middle Name'} />
            </div>

            {/* Last Name */}
            <div className='relative'>
              <Label name={'lastName'} label={authLabel.lastName[lang]} required={true} />
              <FiUser className='absolute left-3 top-[39px] ' />
              <InputField name={'lastName'} type={'text'} placeholder={'Enter your Last Name'} />
            </div>
          </div>

          {/* Email and Mobile number */}
          <div className='flex flex-col md:flex-row gap-x-4 '>
            <div className='relative w-full'>
              <Label name={'email'} label={authLabel.email[lang]} required={true} />
              <IoMailUnreadOutline className='absolute left-3 top-[38px] ' />
              <InputField name={'email'} type={'email'} autocomplete='on' placeholder={'Enter your Email'} />
            </div>

            <div className='relative w-full'>
              <Label name={'phoneNumber'} label={authLabel.mobileNumber[lang]} required={true} />
              <FiPhone className='absolute left-3 top-[39px]' />
              <InputField
                name={'phoneNumber'}
                type={'tel'}
                placeholder={authLabel.enterYourMobileNumber[lang]}
              />
            </div>
          </div>

          {/* Password */}
          <div className='flex flex-col md:flex-row gap-x-4 '>
            <div className='relative w-full'>
              <Label name={'password'} label={authLabel.password[lang]} required={true} />
              <AiOutlineLock className='absolute left-3 top-[38px]' />
              <InputField name={'password'} type={'password'} placeholder={authLabel.enterNewPassword[lang]} />
            </div>

            <div className='relative w-full'>
              <Label name={'confirmPassword'} label={authLabel.confirmPassword[lang]} required={true} />
              <AiOutlineLock className='absolute left-3 top-[38px]' />
              <InputField
                name={'confirmPassword'}
                type={'password'}
                placeholder={authLabel.confirmYourPassword[lang]}
              />
            </div>
          </div>

          {/* Button */}
          <div className='hover:bg-[#1a496d] bg-[#255d88] rounded-md cursor-pointer text-white my-2  w-full self-center'>
            <Button type={'submit'} buttonText={authLabel.signup[lang]} />
          </div>
        </div>
      </form>
      <div className='flex'>
        <p className=''>{authLabel.alreadyHaveAnAccount[lang]} </p>&nbsp;
        <Link to='/auth/user'>
          <span className='text-[#255d88] font-bold'>{authLabel.login[lang]}</span>
        </Link>
      </div>

    </div>
  )
}

export default SignUp
