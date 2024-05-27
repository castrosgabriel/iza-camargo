import { PngIzaLetramento, PngMentoriaHero } from "../../assets/png";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import ContactCTA from "../../components/form/ContactCTA";
import Donut from "../../components/Donut";
import './Mentorias.css';

type ItemProps = {
    number: string;
    text: string;
}

const Item = ({ number, text }: ItemProps) => {
    return (
        <div className='mentoria-item'>
            <h1>{number}</h1>
            <p>{text}</p>
        </div>
    );
}

const Mentorias = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='mentorias' />
            <HeroInternal img={PngMentoriaHero} pageName='Letramento' quote='Para evoluir você vai ter que se despedir.' />
            <div className='mentoria-info snap-item'>
                <div className='mentoria-wrapper'>
                    <div className='mentoria-txt'>
                        <h2>Produtividade Sustentável para alcançar os objetivos sem prejuízos pelo caminho.</h2>
                        <div className='mentoria-list'>
                            <Item number='01' text='Alfabetização das emoções para a preservação do tempo e energia.' />
                            <Item number='02' text='Comunicação não violenta para a dinâmica de feedbacks.' />
                            <Item number='03' text='Gerenciamento do Estresse para a sustentabilidade dos negócios.' />
                            <Item number='04' text='Segurança psicológica e o letramento do assédio.' />
                        </div>
                        <p>*Os temas podem ser ajustados de acordo com as necessidades da empresa e das equipes.</p>
                    </div>
                    <div className='img-letramento'>
                        <Donut color='#86CDEC' className='donut1' size={360} />
                        <Donut color='#86ECBD' className='donut2' size={156} />
                        <Donut color='#86ECE8' className='donut3' size={68} />
                        <img src={PngIzaLetramento} className='iza-letramento' alt='iza' />
                    </div>
                </div>
            </div>
            <ContactCTA
                text="Explore conosco as palestras sobre saúde mental e segurança no trabalho, temas vitais para promover ambientes
                de trabalho saudáveis e produtivos. Izabella é especializada em diversos assuntos recorrentes ao tema, e oferece
                abordagens inovadoras e práticas, capacitando sua equipe para enfrentar os desafios com resiliência e eficácia."
            />
            <Footer />
        </>
    );
}

export default Mentorias;