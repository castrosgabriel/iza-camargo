import { useState } from 'react';
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

    const getPagePath = () => {
        const urlPath = window.location.pathname;
        const pathParts = urlPath.split('/');
        return pathParts[pathParts.length - 1]; // Último item do array, que será a parte da URL após a última barra
    };

    const [formData, setFormData] = useState({
        Onde: getPagePath()
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        fetch(
            'https://script.google.com/macros/s/AKfycbxPnjUhSivGT959C4CrREHOz_5IwCyHTVHJPyZu7eIXLUNp7wtKxqQj7c2rGhx3YWn1/exec',
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
                console.log(data); 
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

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
                    <form className='form-wrapper-container' onSubmit={handleSubmit}>
                        <div className='form-wrapper'>
                            {formFields.map((field, index) => (
                                <InputField name={field} onChange={handleChange} key={index} placeHolder={field} />
                            ))}
                        </div>
                        <Button type='submit' hoverColor='var(--c-dark)' text='Solicitar Contato' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormSection;