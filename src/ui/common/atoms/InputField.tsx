import { useState } from "react";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";


interface IInput {
  name: string
  type: string
  placeholder?: string
  autocomplete?: 'on' | 'off'
  disabled?: boolean
}
const InputField: React.FC<IInput> = ({ name, type, placeholder, autocomplete = 'off', disabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <input
        type={showPassword ? 'text' : type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autocomplete}
        className={`w-full text-xs mb-2 pl-10 pr-3 py-2 border-2 border-black rounded-md focus:outline-none   ${disabled ? 'cursor-not-allowed' : ''}`}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-3 top-[38px] text-gray-400"
          onClick={togglePassword}
        >
          {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
        </button>
      )}
    </div>
  )
}

export default InputField
