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
                text='Entre em contato para contratar palestras, mestre de cerimômia, 
                media training, campanhas e ação em redes sociais:'
                formFields={[
                    { field: 'Nome', required: true },
                    { field: 'Empresa' },
                    { field: 'Telefone' },
                    { field: 'E-mail' },
                    { field: 'Mensagem' }
                ]}
            />
            <Footer />
        </>
    )
}
export default Contato;