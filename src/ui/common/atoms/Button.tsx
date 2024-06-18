interface IButton {
    type: 'button' | 'submit' | 'reset',
    icon?: React.ReactNode,
    buttonText: string
}
const Button: React.FC<IButton> = ({ type, icon, buttonText }) => {
    return (
        <button
            className="flex items-center justify-center  rounded-md p-1 w-full"
            type={type}>
            {icon}
            <span className="text-sm md:text-base  ">{buttonText}</span>
        </button>
    )
}

export default Button