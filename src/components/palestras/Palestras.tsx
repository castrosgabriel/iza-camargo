import { PngPalestraHero } from "../../assets/png";
import Footer from "../footer/Footer";
import FormSection from "../form/FormSection";
import Galery from "../galery/Galery";
import GaleryTestimonal from "../galery/GaleryTestimonal";
import HeroInternal from "../hero/HeroInternal";
import MenuWrapper from "../menu/MenuWrapper";
import { imgArray } from "../minha-historia/MinhaHistoria";

const Palestras = () => {
    return (
        <>
            <MenuWrapper whichIsActive='palestras' />
            <HeroInternal
                img={PngPalestraHero}
                pageName='Palestras'
                quote='Não há uma vida pessoal e outra profissional'
            />
            <Galery>
                {
                    imgArray.map((img: any, index: number) => {
                        return (
                            <img src={img.src} key={index} alt='galery' />
                        )
                    })
                }
            </Galery>
            <FormSection />
            <GaleryTestimonal />
            <Footer />
        </>
    );
}

export default Palestras;