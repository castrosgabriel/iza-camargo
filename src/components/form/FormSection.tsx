import Button from '../button/Button';
import InputField from './InputField';
import './form.css';

type FormSectionProps = {
    title: string,
    text: string
}

const FormSection = ({ title, text }: FormSectionProps) => {
    return (
        <div className='form-section'>
            <div className='form-section-content'>
                <div className='form-txt'>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <div className='form-wrapper-container'>
                    <div className='form-wrapper'>
                        <InputField placeHolder='Nome' />
                        <InputField placeHolder='Empresa' />
                        <InputField placeHolder='Telefone' />
                        <InputField placeHolder='Email' />
                    </div>
                    <Button hoverColor='var(--c-dark)' text='Solicitar Contato' />
                </div>
            </div>
        </div>
    )
}

export default FormSection;