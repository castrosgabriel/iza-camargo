import './form.css';

type InputFieldProps = {
    placeHolder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    noValue?: boolean;
}

const InputField = ({ placeHolder, onChange, name, noValue }: InputFieldProps) => {
    return (
        <input
            name={name}
            onChange={onChange}
            type='text'
            className='input-field'
            placeholder={placeHolder}
            value={noValue ? '' : undefined}
        />
    )
}

type TextAreaFieldProps = {
    placeHolder: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    noValue?: boolean;
}

const TextAreaField = ({ placeHolder, onChange, name, noValue }: TextAreaFieldProps) => {
    return (
        <textarea
            name={name}
            onChange={onChange}
            className='input-field'
            placeholder={placeHolder}
            value={noValue ? '' : undefined}
        />
    )
}

export { InputField, TextAreaField };
