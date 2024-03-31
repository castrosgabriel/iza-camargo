import { PngContactHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import FormSection from "../../components/form/FormSection";
import { useEffect } from "react";

const Contato = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper />
            <HeroInternal
                img={PngContactHero}
                pageName='Contato'
                quote='Quem dorme mal, vive mal! Como anda o seu sono?'
            />
            <FormSection
                title='Entre em contato'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus iaculis pharetra erat, non suscipit ante. 
                Vestibulum gravida finibus dapibus.'
                formFields={['Nome', 'Empresa', 'Telefone', 'E-mail', 'Mensagem']}
                socialMedia
            />
            <Footer />
        </>
    )
}
export default Contato;