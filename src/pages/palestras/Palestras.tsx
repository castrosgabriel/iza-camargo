import { useEffect } from "react";
import { PngPalestraHero } from "../../assets/png";
import { PngPalestra1, PngPalestra2, PngPalestra3, PngPalestra4, PngPalestra5, PngPalestra6, PngPalestra7, PngPalestra8 } from "../../assets/png/palestras";
import Footer from "../../components/footer/Footer";
import FormSection from "../../components/form/FormSection";
import GaleryTestimonal from "../../components/galery/GaleryTestimonal";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import { imgArray } from "../minha-historia/MinhaHistoria";
import SliderPalestra from "./SliderPalestra";
import GaleryImg from "../../components/galery/GaleryImg";

const palestras = [
    {
        img: PngPalestra1,
        name: 'Produtividade Sustentável',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios. Conteúdo: segurança psicológica e atualização de identidade.',
        color: '#86ECBD'
    },
    {
        img: PngPalestra2,
        name: 'Saúde Mental e Inteligência Emocional',
        content: 'Precisamos descomplicar a saúde mental para promover a autorresponsabilidade, o autocuidado e assim contribuir para a inteligência emocional das equipes. Conteúdo: identificação de comportamentos tóxicos e prevenção de problemas de saúde invisíveis (depressão, ansiedade e burnout).',
        color: '#86CDEC'
    },
    {
        img: PngPalestra3,
        name: 'Gerenciamento de Estresse',
        content: 'Não podemos controlar as situações que podem provocar estresse ao longo do dia, mas podemos administrar como vamos reagir diante delas. O gerenciamento do estresse é o único caminho para lidar com os imprevistos diários e assim manter uma vida produtiva e sem doenças. Conteúdo: letramento do estresse e técnicas de improviso.',
        color: '#F5859F'
    },
    {
        img: PngPalestra4,
        name: 'Gestão de Tempo | Educação Temporal',
        content: 'O tempo está passando mais rápido ou estamos passando mais rápido pelo tempo? Fazer as pazes com o tempo é essencial para evitar o estresse, a ansiedade e outros adoecimentos. Este tema é a base do best-seller DÁ UM TEMPO! Como encontrar limite em um mundo sem limites, lançado pela Globo Livros. Conteúdo: contratos de tempo e treinamento do não.',
        color: '#FDC286'
    },
    {
        img: PngPalestra5,
        name: 'Adaptabilidade',
        content: 'A inovação é premissa básica para a sustentabilidade dos negócios. Quanto mais inovação, mais mudanças. Como manter o foco e a produtividade sem perder a cabeça e a saúde com tantas adversidades, mudanças e necessidades de adaptação? Conteúdo: Segurança Psicologica e turismo interno/autoconhecimento para a autoconfiança',
        color: '#86ECE8'
    },
    {
        img: PngPalestra6,
        name: 'Compreendentdo e Prevenindo a Síndrome de Burnout',
        content: 'A síndrome de burnout atinge mais de 30 milhões de brasileiros e entrou para a lista de doenças relacionadas ao trabalho pelo Ministério da Saúde em 29/11/23. Afeta o indivíduo, o ambiente e a reputação das empresas. Este conteúdo é essencial para lideranças e/ou liderados compreenderem direitos e deveres e como podem atuar na prevenção, tratamento ou reabilitação. Conteúdo: sinais e sintomas para a prevenção da síndrome de burnout',
        color: '#CDA0FA'
    },
    {
        img: PngPalestra7,
        name: 'Mulheres, como se proteger do estresse?',
        content: 'As mulheres são mais propensas ao desenvolvimento do estresse crônico e outras patologias relacionadas à saúde mental. A atualização de identidade é fundamental para o equilíbrio de muitas funções sem perder a cabeça, a autoestima e a produtividade. Conteúdo: atualização de identidade e inteligência emocional.',
        color: '#F6E78F'
    },
    {
        img: PngPalestra8,
        name: 'Atualização de identidade',
        content: 'Tomamos 35 mil decisões por dia, e só vamos fazer boas escolhas quando atualizarmos a própria identidade. O turismo interno/autoconhecimento é a única saída coerente para uma vida produtiva e com sentido. Conteúdo: teoria e prática para a atualização de identidade.',
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
            <GaleryImg imgArray={imgArray} />
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