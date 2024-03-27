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
            <FormSection />
            <Footer />
        </>
    )
}
export default Contato;