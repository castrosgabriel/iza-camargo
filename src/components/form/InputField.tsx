import { ChangeEvent } from 'react';
import './form.css';

type InputFieldProps = {
    placeHolder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    noValue?: boolean;
    pattern?: string;
    required?: boolean;
    type?: string;
}

const InputField = ({ placeHolder, onChange, name, noValue, pattern, required, type }: InputFieldProps) => {
    return (
        <input
            name={name}
            onChange={onChange}
            type={type}
            className='input-field'
            placeholder={placeHolder}
            value={noValue ? '' : undefined}
            pattern={pattern}
            required={required}
            
        />
    )
}

type TextAreaFieldProps = {
    placeHolder: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    name: string;
    noValue?: boolean;
    required?: boolean;
}

const TextAreaField = ({ placeHolder, onChange, name, noValue, required }: TextAreaFieldProps) => {
    return (
        <textarea
            name={name}
            onChange={onChange}
            className='input-field'
            placeholder={placeHolder}
            value={noValue ? '' : undefined}
            required={required}
        />
    )
}

export { InputField, TextAreaField };
