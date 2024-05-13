import { useEffect } from "react";
import { PngPalestraHero } from "../../assets/png";
import { PngPalestra1, PngPalestra2, PngPalestra3, PngPalestra4, PngPalestra5, PngPalestra6, PngPalestra7, PngPalestra8, PngPalestra9, PngPalestra10 } from "../../assets/png/palestras";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import SliderPalestra from "./SliderPalestra";
import ContactCTA from "../../components/form/ContactCTA";

const palestras = [
    {
        img: PngPalestra1,
        name: 'Produtividade Sustentável',
        content: 'A Urgência dos EPIs de Saúde Mental no Ambiente de Trabalho. Izabella aborda os EPIs de saúde mental que precisam ser desenvolvidos pelas instituições (como a prática da segurança psicológica, por exemplo) e também reforça e estimula a autorresponsabilidade de cada funcionário para que eliminem comportamentos tóxicos e também contribuam para um ambiente com menos ou sem riscos psicossociais.',
        color: '#F48F81'
    },
    {
        img: PngPalestra2,
        name: 'Setembro Amarelo',
        content: 'Setembro amarelo: promoção da vida para a prevenção do suicídio! A jornalista apresenta, de forma leve, sinais e sintomas que explicam o que é saúde mental e emocional para a manutenção da qualidade de vida e a partir disso, a prevenção da depressão e síndrome de burnout, problemas de saúde que podem levar a comportamentos suicidas.',
        color: '#F2DE85'
    },
    {
        img: PngPalestra3,
        name: 'Produtividade Sustentável',
        content: 'Queremos um mundo sustentável, mas estamos trabalhando de forma saudável? É possível equilibrar objetivos pessoais e profissionais com informações e decisões coerentes, garantindo a sustentabilidade dos negócios. Conteúdo: segurança psicológica e atualização de identidade.',
        color: '#0DE3B4'
    },
    {
        img: PngPalestra4,
        name: 'Saúde Mental e Inteligência Emocional',
        content: 'Precisamos descomplicar a saúde mental para promover a autorresponsabilidade, o autocuidado e assim contribuir para a inteligência emocional das equipes. Conteúdo: identificação de comportamentos tóxicos e prevenção de problemas de saúde invisíveis (depressão, ansiedade e burnout).',
        color: '#53C6E5'
    },
    {
        img: PngPalestra5,
        name: ' Gerenciamento do Estresse',
        content: 'Não podemos controlar as situações que podem provocar estresse ao longo do dia, mas podemos administrar como vamos reagir diante delas. O gerenciamento do estresse é o único caminho para lidar com os imprevistos diários e assim manter uma vida produtiva e sem doenças. Conteúdo: letramento do estresse e técnicas de improviso.',
        color: '#F4809B'
    },
    {
        img: PngPalestra6,
        name: 'Gestão do Tempo/ Educação Temporal',
        content: 'O tempo está passando mais rápido ou estamos passando mais rápido pelo tempo? Fazer as pazes com o tempo é essencial para evitar o estresse, a ansiedade e outros adoecimentos. Este tema é a base do best-seller DÁ UM TEMPO! Como encontrar limite em um mundo sem limites, lançado pela Globo Livros. Conteúdo: contratos de tempo e treinamento do não.',
        color: '#F4BB7E'
    },
    {
        img: PngPalestra7,
        name: 'Mulheres: Mais Tempo e Menos Estresse!',
        content: 'Podemos controlar as situações que geram estresse? Não, mas podemos gerenciar o estresse diante das situações! O estresse é como o colesterol. Tem o bom e o ruim. Na quantidade certa, o bom estimula. Já o estresse ruim, inflama as células, as ideias, destrói relacionamentos e diminui a produtividade.',
        color: '#0DE3DF'
    },
    {
        img: PngPalestra8,
        name: 'Compreendendo e Prevenindo a Síndrome de Burnout',
        content: 'A síndrome de burnout atinge mais de 30 milhões de brasileiros e entrou para a lista de doenças relacionadas ao trabalho pelo Ministério da Saúde em 29/11/23. Afeta o indivíduo, o ambiente e a reputação das empresas. Este conteúdo é essencial para lideranças e/ou liderados compreenderem direitos e deveres e como podem atuar na prevenção, tratamento ou reabilitação. Conteúdo: sinais e sintomas para a prevenção da síndrome de burnout',
        color: '#D29AF1'
    },
    {
        img: PngPalestra9,
        name: 'Atualização de Identidade',
        content: 'Tomamos 35 mil decisões por dia, e só vamos fazer boas escolhas quando atualizarmos a própria identidade. O turismo interno/autoconhecimento é a única saída coerente para uma vida produtiva e com sentido. Conteúdo: teoria e prática para a atualização de identidade.',
        color: '#5AEC83'
    },
    {
        img: PngPalestra10,
        name: 'Mulheres, como se proteger do estresse?',
        content: 'Iza é certificada internacional como facilitadora de Segurança Psicológica, pela ISMA. A palestra aborda os 7 pilares da segurança psicológica, o papel do líder e liderados na construção de um ambiente que lida com mudanças constantes e mesmo assim garante resultados dos times.',
        color: '#F58AD4'
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
            <ContactCTA />
            <Footer />
        </>
    );
}

export default Palestras;