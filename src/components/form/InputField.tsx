import './form.css';

type InputFieldProps = {
    placeHolder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const InputField = ({ placeHolder, onChange, name }: InputFieldProps) => {
    return (
        <input
            name={name}
            onChange={onChange}
            type='text'
            className='input-field'
            placeholder={placeHolder}
        />
    )
}

export default InputField;
