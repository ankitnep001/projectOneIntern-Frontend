interface IButton {
  type: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  buttonText: string
  onClick?: () => void;
}
const Button: React.FC<IButton> = ({ type, icon, buttonText, onClick }) => {
  return (
    <button className='flex items-center justify-center  rounded-md p-1 w-full' type={type} onClick={onClick}>
      {icon}
      <span className='text-sm md:text-base  '>{buttonText}</span>
    </button>
  )
}

export default Button
