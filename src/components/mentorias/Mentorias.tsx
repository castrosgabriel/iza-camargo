import { PngMentoriaHero } from "../../assets/png";
import Footer from "../footer/Footer";
import GaleryTestimonal from "../galery/GaleryTestimonal";
import HeroInternal from "../hero/HeroInternal";
import MenuWrapper from "../menu/MenuWrapper";

const Mentorias = () => {
    return (
        <>
            <MenuWrapper whichIsActive='mentorias' />
            <HeroInternal
                img={PngMentoriaHero}
                pageName='Mentorias'
                quote='O quanto você está se incluindo nas suas 35 mil escolhas diárias?'
            />
            <GaleryTestimonal />
            <Footer />
        </>
    );
}

export default Mentorias;