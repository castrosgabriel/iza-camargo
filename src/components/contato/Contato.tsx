import { PngContactHero } from "../../assets/png";
import Footer from "../footer/Footer";
import HeroInternal from "../hero/HeroInternal";
import MenuWrapper from "../menu/MenuWrapper";
import FormSection from "../form/FormSection";

const Contato = () => {
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
            />
            <Footer />
        </>
    )
}
export default Contato;