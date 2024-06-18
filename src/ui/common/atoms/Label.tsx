import RequiredSign from "./RequiredSign"

interface ILabel {
    name: string,
    label: string,
    required?: boolean,
}

const Label: React.FC<ILabel> = ({ name, label, required }) => {
    return (
        <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
            {label} {required && <RequiredSign />}
        </label>
    )
}

export default Label
