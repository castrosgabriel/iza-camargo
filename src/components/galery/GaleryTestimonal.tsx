import { PngAvatarArthur, PngAvatarGabriel, PngCarlosBranco, PngDrieliDantas } from "../../assets/png"
import CardTestimonal from "./CardTestimonal"
import Galery from "./Galery"

const testimonals = [
    {
        image: PngAvatarArthur,
        name: 'Arthur Rodrigues',
        subtitle: 'Pfizer',
        description: 'Mais do que apresentar e conduzir oito sessões científicas em 2021, Izabella deu personalidade ao projeto e nos ajudou a devolver energia para muitos pacientes. Seu profissionalismo corroborou com nossa missão de trazer um novo olhar para Anemia.'
    },
    {
        image: PngAvatarGabriel,
        name: 'Gabriel Barreto',
        subtitle: 'XP Inc.',
        description: 'A Iza consegue falar de um tema tão sensível, em um momento delicado, com leveza, empatia e humanidade. Suas palavras transmitiram otimismo e confiança para evoluirmos com as questões de saúde mental dentro da companhia. O bate-papo com a Izabella foi revigorante.'
    },
    {
        image: PngCarlosBranco,
        name: 'Carlos Branco',
        subtitle: 'Cargill',
        description: 'A palestra foi excelente palestra, os colaboradores da Cargill só fizeram elogios à apresentação da Izabella e seguem comentando os pontos da sua fala de que eles mais gostaram. A relevância do tema e a forma como foi abordado causou um enorme impacto em todos. Muitos disseram que poderiam seguir ouvindo a Isabella por horas.'
    },
    {
        name: 'Isis Santos',
        subtitle: 'Unimed Fortaleza',
        description: 'A palestra da Izabella foi maravilhosa, ela foi brilhante na fala e conseguiu segurar o público até o último momento do evento. Com uma fala leve e extremamente necessária a Izabella trouxe várias reflexões sobre o assunto "Produtividade Sustentável". Após a palestra ela fez questão de cumprimentar todos, tirou fotos.... foi uma fofa. 💚'
    },
    {
        image: PngDrieliDantas,
        name: 'Drieli Dantas',
        subtitle: 'Scania',
        description: 'A palestra foi ótima e o feedback sempre é o melhor, todos os colaboradores adoraram a palestra e atendeu muito as nossas expectativas.'
    },

]

const GaleryTestimonal = () => {
    return (
        <>
            <Galery gap={0} backgroundColor='var(--c-white)' titleColor='var(--c-black)' title='Depoimentos'>
                {testimonals.map((testimonal, index) =>
                    <CardTestimonal
                        key={index}
                        image={testimonal.image}
                        name={testimonal.name}
                        subtitle={testimonal.subtitle}
                        description={testimonal.description}
                    />
                )}
            </Galery>
        </>
    )
}

export default GaleryTestimonal