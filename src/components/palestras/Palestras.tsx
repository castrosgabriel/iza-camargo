import { PngPalestraHero } from "../../assets/png";
import { PngPalestra1 } from "../../assets/png/palestras";
import Footer from "../footer/Footer";
import FormSection from "../form/FormSection";
import Galery from "../galery/Galery";
import GaleryTestimonal from "../galery/GaleryTestimonal";
import HeroInternal from "../hero/HeroInternal";
import MenuWrapper from "../menu/MenuWrapper";
import { imgArray } from "../minha-historia/MinhaHistoria";
import SliderPalestra from "./SliderPalestra";

const items = [
    {
        img: PngPalestra1,
        name: 'Palestra 1',
        content: 'Conteúdo da palestra 1'
    },
    {
        img: PngPalestra1,
        name: 'Palestra 2',
        content: 'Conteúdo da palestra 2'
    },
    {
        img: PngPalestra1,
        name: 'Palestra 3',
        content: 'Conteúdo da palestra 3'
    },
    {
        img: PngPalestra1,
        name: 'Palestra 4',
        content: 'Conteúdo da palestra 4'
    },
    {
        img: PngPalestra1,
        name: 'Palestra 5',
        content: 'Conteúdo da palestra 5'
    },
]


const Palestras = () => {
    return (
        <>
            <MenuWrapper whichIsActive='palestras' />
            <HeroInternal
                img={PngPalestraHero}
                pageName='Palestras'
                quote='Não há uma vida pessoal e outra profissional'
            />
            <SliderPalestra itemsArray={items} />
            <Galery>
                {
                    imgArray.map((img: any, index: number) => {
                        return (
                            <img src={img.src} key={index} alt='galery' />
                        )
                    })
                }
            </Galery>
            <FormSection
                title='Invista na saúde mental de sua empresa.'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum 
                gravida finibus dapibus. Etiam congue augue non rutrum sagittis. 
                Aliquam a ornare augue, in scelerisque magna. Sed vitae nisi et 
                ligula semper ullamcorper tempus efficitur magna. Phasellus justo 
                lectus, tempus pulvinar lacus a, tincidunt sagittis odio. ' />
            <GaleryTestimonal />
            <Footer />
        </>
    );
}

export default Palestras;