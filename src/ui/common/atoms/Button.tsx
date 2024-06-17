interface IButton {
    type: 'button' | 'submit' | 'reset',
    icon?: React.ReactNode,
    buttonText: string
}
const Button: React.FC<IButton> = ({ type, icon, buttonText }) => {
    return (
        <button
            className="flex gap-x-1 rounded-md p-1"
            type={type}>
            {icon}
            <span className="text-sm md:text-base lg:text-lg">{buttonText}</span>
        </button>
    )
}

export default Button