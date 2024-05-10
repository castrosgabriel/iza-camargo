import { PngShadowContentCTA } from "../../assets/png";
import { SmallButton } from "../button/Button";
import './form.css';

const ContactCTA = () => {
    return (
        <div className='inner-content-form'>
            <h3>
                Invista na saúde mental
                <br />
                de seus colaboradores.
            </h3>
            <p>
                Explore conosco as palestras sobre saúde mental e segurança no trabalho, temas vitais para promover ambientes 
                de trabalho saudáveis e produtivos. Izabella é especializada em diversos assuntos recorrentes ao tema, e oferece
                abordagens inovadoras e práticas, capacitando sua equipe para enfrentar os desafios com resiliência e eficácia.
            </p>
            <SmallButton text="Entrar em contato" />
            <img className='shadow-content-cta' src={PngShadowContentCTA} alt='shadow' />
        </div>
    )
}

export default ContactCTA;