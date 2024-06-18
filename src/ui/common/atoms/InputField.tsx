interface IInput {
    name: string,
    type: string,
    placeholder?: string,
    autocomplete?: 'on' | "off";
    disabled?: boolean
}
const InputField: React.FC<IInput> = ({ name, type, placeholder, autocomplete, disabled }) => {
    return (
        <input
            type={type}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            autoComplete={autocomplete}
            className={`w-full text-xs mb-2 pl-10 pr-3 py-2 border-2 border-black rounded-md focus:outline-none   ${disabled ? 'cursor-not-allowed' : ''}`}

        />
    )
}

export default InputField
