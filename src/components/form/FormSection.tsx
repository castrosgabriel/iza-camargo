import Button from '../button/Button';
import InputField from './InputField';
import './form.css';

const FormSection = () => {
    return (
        <div className='form-section'>
            <div className='form-section-content'>
                <div className='form-txt'>
                    <h3>
                        Invista na saúde mental de sua empresa.
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum
                        gravida finibus dapibus. Etiam congue augue non rutrum sagittis.
                        Aliquam a ornare augue, in scelerisque magna. Sed vitae nisi et
                        ligula semper ullamcorper tempus efficitur magna. Phasellus justo
                        lectus, tempus pulvinar lacus a, tincidunt sagittis odio.
                    </p>
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