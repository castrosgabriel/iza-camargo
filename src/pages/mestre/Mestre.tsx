import { PngIzaMestre, PngMestreHero } from "../../assets/png";
import Donut from "../../components/Donut";
import Footer from "../../components/footer/Footer";
import ContactCTA from "../../components/form/ContactCTA";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import './Mestre.css';

type InternalFrameProps = {
    title?: string;
    txt?: string;
    img?: string;
}

export const InternalFrame = ({ title, txt, img }: InternalFrameProps) => {
    return (
        <div className='mestre-frame'>
            <div className='mestre-width'>
                <div className='mestre-txt'>
                    <h2>{title}</h2>
                    <p>{txt}</p>
                </div>
                <div className='img-mestre'>
                    <img src={img} alt='mestre' />
                    <Donut color='#86CDEC' className='donut-mestre-1' size={172} />
                    <Donut color='#86ECBD' className='donut-mestre-2' size={104} />
                    <Donut color='#86ECE8' className='donut-mestre-3' size={530} />
                </div>
            </div>
        </div>
    )
}


const Mestre = () => {
    return (
        <>
            <MenuWrapper whichIsActive='mestre' />
            <HeroInternal
                pageName='Mestre de Cerimonia'
                quote='Se você estiver se encolhendo para caber em algum lugar, saia.'
                img={PngMestreHero}
            />
            <InternalFrame
                title='A versatilidade de Izabella Camargo'
                txt='
                A experiência de mais de 20 anos à frente de programas ao vivo
                na TV permite que Izabella apresente e medie eventos presenciais
                ou digitais com dinamismo, muito jogo de cintura e preparo para
                lidar com imprevistos. Como mestre de cerimônias, atua há mais
                de 22 anos em eventos nacionais e internacionais.
                '
                img={PngIzaMestre}
            />
            <ContactCTA />
            <Footer />
        </>
    )
}

export default Mestre;