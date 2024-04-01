import { useEffect } from "react";
import { PngPalestraHero } from "../../assets/png";
import { PngPalestra1, PngPalestra2, PngPalestra3, PngPalestra4, PngPalestra5, PngPalestra6, PngPalestra7, PngPalestra8 } from "../../assets/png/palestras";
import Footer from "../../components/footer/Footer";
import FormSection from "../../components/form/FormSection";
import Galery from "../../components/galery/Galery";
import GaleryTestimonal from "../../components/galery/GaleryTestimonal";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import { imgArray } from "../minha-historia/MinhaHistoria";
import SliderPalestra from "./SliderPalestra";

const palestras = [
    {
        img: PngPalestra1,
        name: 'Produtividade Sustentável',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#86ECBD'
    },
    {
        img: PngPalestra2,
        name: 'Saúde Mental e Inteligência Emocional',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#86CDEC'
    },
    {
        img: PngPalestra3,
        name:  'Gerenciamento de Estresse',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#F5859F'
    },
    {
        img: PngPalestra4,
        name: 'Gestão de Tempo | Educação Temporal',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#FDC286'
    },
    {
        img: PngPalestra5,
        name: 'Adaptabilidade',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#86ECE8'
    },
    {
        img: PngPalestra6,
        name: 'Compreendentdo e Prevenindo a Síndrome de Burnout',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável?',
        color: '#CDA0FA'
    },
    {
        img: PngPalestra7,
        name: 'Mulheres, como se proteger do estresse',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#F6E78F'
    },
    {
        img: PngPalestra8,
        name: 'Atualização de identidade',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios.',
        color: '#9DF68F'
    },
]

const Palestras = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='palestras' />
            <HeroInternal
                img={PngPalestraHero}
                pageName='Palestras'
                quote='Não há uma vida pessoal e outra profissional'
            />
            <SliderPalestra itemsArray={palestras} />
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