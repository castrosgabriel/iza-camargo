import { useEffect } from "react";
import { PngIzaMestre, PngIzaMestreMobile, PngMestreHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import ContactCTA from "../../components/form/ContactCTA";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import './Mestre.css';
import InternalFrame from "./InternalFrame";

const Mestre = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='mestre' />
            <HeroInternal
                pageName='Mestre de Cerimonia'
                mobileImg={PngIzaMestreMobile}
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
            <ContactCTA
                text="Se você está em busca de uma profissional experiente e comprometida para mediar painéis, conduzir entrevistas ou apresentar eventos, você veio ao lugar certo. Izabella Camargo está pronta para trazer sua expertise e entusiasmo para enriquecer a sua experiência. Caso tenha interesse em contar com seus serviços, não hesite em entrar em contato através do endereço abaixo. Estamos ansiosos para colaborar com você e tornar seu evento ainda mais memorável."
            />
            <Footer />
        </>
    )
}

export default Mestre;