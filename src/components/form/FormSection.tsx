import { useEffect, useState } from 'react';
import { SocialMedia } from '../bottom-bar/BottomBar';
import Button, { SmallButton } from '../button/Button';
import { InputField, TextAreaField } from './InputField';
import './form.css';

type FormSectionProps = {
    title: string,
    text: string
    formFields?: Array<{ field: string, required?: boolean, type?: string }>,
}

const FormSection = ({
    title,
    text,
    formFields = [
        { field: 'Nome', required: true },
        { field: 'Empresa' },
        { field: 'Telefone', type: 'tel' },
        { field: 'E-mail', type: 'email', required: true },
        { field: 'Mensagem',  },
    ],
}: FormSectionProps) => {

    const getPagePath = () => {
        const urlPath = window.location.pathname;
        const pathParts = urlPath.split('/');
        return pathParts[pathParts.length - 1];
    };

    const [loading, setLoading] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const [formData, setFormData] = useState({
        Onde: getPagePath(),
        Date: new Date().toLocaleString(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(formData);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setLoading(true);
        fetch(
            'https://script.google.com/macros/s/AKfycbym_MoAEws0MDNUinrVF2oRp3sM_aXwW70y8dWpmAmZ7_hV28EjrMF4WEU9DabsAU7a/exec',
            {
                method: "POST",
                body: JSON.stringify(formData)
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                setFormSent(true);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                setLoading(false);
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    useEffect(() => {
        if (formSent) {
            setTimeout(() => {
                setFormSent(false);
            }, 2000);
        }
    }, [formSent]);


    return (
        <div className='form-section snap-item'>
            <div className='form-section-content'>
                <div>
                    <div className='form-txt'>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                    <div className='social-media-form'>
                        <div className='team-container'>
                            <div className='team-item'>
                                <p><span>Contratar Palestras e Mentorias</span></p>
                                <p>Maira Delamor</p>
                                <div>
                                    <SmallButton link='https://wa.me/+5511982814747' text='+55 11 98281.4747' />
                                </div>
                            </div>
                            <div className='team-item'>
                                <p style={{ color: 'var(--c-primary)' }}> Para Acessoria:</p>
                                <p><span>Assessoria de Imprensa</span></p>
                                <p>Alessandra Bruno Rocha</p>
                                <div>
                                    <SmallButton link='https://wa.me/+5511974987070' text='+55 11 97498-7070' />
                                </div>
                            </div>
                        </div>
                        <div className='social-footer-form'>
                            <p><span>Redes Sociais</span></p>
                            <SocialMedia />
                        </div>
                    </div>

                </div>
                <div className='form-wrapper-container'>
                    <form className='form-wrapper-container' onSubmit={handleSubmit}>
                        <div className='title-fields'>
                            <h3>Envie uma Mensagem</h3>
                            <p>Caso seja contratação, favor especificar o tipo de trabalho e o que deseja.</p>
                        </div>
                        <div className='form-wrapper'>
                            {formFields.map((field, index) => {
                                if (field.field !== 'Mensagem') {
                                    return <InputField
                                        name={field.field}
                                        required={field.required}
                                        noValue={formSent}
                                        onChange={handleChange}
                                        key={index}
                                        placeHolder={field.field}
                                        type={field.type || 'text'}
                                    />;
                                } else {
                                    return <TextAreaField
                                        name={field.field}
                                        noValue={formSent}
                                        required={field.required}
                                        onChange={handleChange}
                                        key={index}
                                        placeHolder={field.field}
                                    />;
                                }
                            })}
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <Button
                                loading={loading}
                                type='submit'
                                hoverColor='var(--c-dark)'
                                text='Enviar'
                            />
                            {formSent && <p style={{ color: 'white' }}>Mensagem Enviada!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormSection;