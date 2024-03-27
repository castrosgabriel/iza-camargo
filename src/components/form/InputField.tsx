import './form.css';

type InputFieldProps = {
    placeHolder: string;
}

const InputField = ({placeHolder}:InputFieldProps) => {

    return (
        <input
            type='text'
            className='input-field'
            placeholder={placeHolder}
        />
    )
}

export default InputField;
