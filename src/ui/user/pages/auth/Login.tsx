import { authLabel } from '@data/localization/common/auth'
import useLang from '@hooks/useLang'
import Button from '@ui/common/atoms/Button'
import InputField from '@ui/common/atoms/InputField'
import Label from '@ui/common/atoms/Label'
import { AiOutlineLock } from 'react-icons/ai'
import { IoArrowBack, IoMailUnreadOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const { lang } = useLang()
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/'); // Navigate back one step in history
  };
  return (
    <div className='px-4 py-4  w-[98vw] md:w-[50vw] lg:w-[30vw]'>
      <form className='  '>
        {/* <div className='w-fit flex justify-end items-center px-2 mb-2 cursor-pointer hover:bg-[#1a496d] bg-[#255d88] rounded-md text-white ' onClick={goBack}> */}
        <div className='w-fit pb-2'>
          <Button type={'button'} buttonText={authLabel.goBack[lang]} icon={<IoArrowBack />} onClick={goBack} />
        </div>
        <h1 className='text-[#255d88] font-bold mb-3'>{authLabel.userLogin[lang]}</h1>
        <div className='w-full'>
          {/* Email */}
          <div className='relative'>
            <Label name={'email'} label={authLabel.email[lang]} />
            <IoMailUnreadOutline className='absolute left-3 top-[38px] ' />
            <InputField name={'email'} type={'email'} autocomplete='on' placeholder={authLabel.enterYourEmail[lang]} />
          </div>

          {/* Password */}
          <div className='relative'>
            <Label name={'password'} label={authLabel.password[lang]} />
            <AiOutlineLock className='absolute left-3 top-[38px]' />
            <InputField name={'password'} type={'password'} placeholder={authLabel.enterYourPassword[lang]} />
          </div>

          {/* Remember ME */}
          <div className='flex items-center gap-x-2 mb-3'>
            <input type='checkbox' />
            <label className='font-medium'>{authLabel.rememberMe[lang]}</label>
          </div>

          <div className='hover:bg-[#1a496d] bg-[#255d88] rounded-md cursor-pointer text-white mb-2  w-full self-center'>
            <Button type={'submit'} buttonText={authLabel.login[lang]} />
          </div>
        </div>
      </form>
      <div className='flex'>
        <p className=''>{authLabel.dontHaveAnAccount[lang]} </p>&nbsp;
        <Link to='/auth/user/sign-up'>
          <span className='text-[#255d88] font-bold'>{authLabel.signup[lang]}</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
