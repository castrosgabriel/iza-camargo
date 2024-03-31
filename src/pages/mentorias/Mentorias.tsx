import { PngMentoriaHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import GaleryTestimonal from "../../components/galery/GaleryTestimonal";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import FormSection from "../../components/form/FormSection";
import { useEffect } from "react";

const Mentorias = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='mentorias' />
            <HeroInternal
                img={PngMentoriaHero}
                pageName='Mentorias'
                quote='O quanto você está se incluindo nas suas 35 mil escolhas diárias?'
            />
            <FormSection
                title='Agende agora a sua mentoria'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum 
                gravida finibus dapibus. Etiam congue augue non rutrum sagittis. 
                Aliquam a ornare augue, in scelerisque magna. Sed vitae nisi et 
                ligula semper ullamcorper tempus efficitur magna. Phasellus justo
                 lectus, tempus pulvinar lacus a, tincidunt sagittis odio. Etiam
                  congue augue non rutrum sagittis. Aliquam a ornare augue, in 
                  scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                  tempus efficitur magna.'
            />
            <GaleryTestimonal />
            <Footer />
        </>
    );
}

export default Mentorias;