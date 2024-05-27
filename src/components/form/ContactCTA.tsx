import { PngShadowContentCTA } from "../../assets/png";
import { SmallButton } from "../button/Button";
import './form.css';

type ContactCTAProps = {
    text: string;
}

const ContactCTA = ({ text }: ContactCTAProps) => {
    return (
        <div className='inner-content-form'>
            <h3>
                Invista na saúde mental <br />
                de seus colaboradores.
            </h3>
            <p>
                {text}
            </p>
            <SmallButton text="Entrar em contato" link="https://wa.me/+5511982814747"/>
            <img className='shadow-content-cta' src={PngShadowContentCTA} alt='shadow' />
        </div>
    )
}

export default ContactCTA;