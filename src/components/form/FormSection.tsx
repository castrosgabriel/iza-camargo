import { SocialMedia } from '../bottom-bar/BottomBar';
import Button, { SmallButton } from '../button/Button';
import InputField from './InputField';
import './form.css';

type FormSectionProps = {
    title: string,
    text: string
    formFields?: string[]
    socialMedia?: boolean
}

const FormSection = ({
    title,
    text,
    formFields = ['Nome', 'Empresa', 'Telefone', 'E-mail'],
    socialMedia
}: FormSectionProps) => {
    return (
        <div className='form-section'>
            <div className='form-section-content'>
                <div>
                    <div className='form-txt'>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    {socialMedia &&
                        <div className='social-media-form'>
                            <p><b>Contato</b></p>
                            <div className='team-container'>
                                <div className='team-item'>
                                    <p><span>Contratar Palestras e Mentorias</span></p>
                                    <p>Maira Delamor</p>
                                    <div>
                                        <SmallButton text='+55 11 98281.4747' />
                                    </div>
                                </div>
                                <div className='team-item'>
                                    <p><span>Assessoria de Imprensa</span></p>
                                    <p>Alessandra Bruno Rocha</p>
                                    <div>
                                        <SmallButton text='+55 11 97498-7070' />
                                    </div>
                                </div>
                            </div>
                            <div className='social-footer-form'>
                                <p><span>Redes Sociais</span></p>
                                <SocialMedia />
                            </div>
                        </div>
                    }
                </div>
                <div className='form-wrapper-container'>
                    <div className='form-wrapper'>
                        {formFields.map((field, index) => (
                            <InputField key={index} placeHolder={field} />
                        ))}
                    </div>
                    <Button hoverColor='var(--c-dark)' text='Solicitar Contato' />
                </div>
            </div>
        </div>
    )
}

export default FormSection;