import { PngAvatarArthur, PngAvatarGabriel } from "../../assets/png"
import CardTestimonal from "./CardTestimonal"
import Galery from "./Galery"

const GaleryTestimonal = () => {
    return (
        <>
            <Galery gap={0} backgroundColor='var(--c-white)' titleColor='var(--c-black)' title='Depoimentos'>
                <CardTestimonal
                    image={PngAvatarArthur}
                    name='Arthur Rodrigues'
                    subtitle='Pfizer'
                    description='Mais do que apresentar e conduzir oito sessões científicas em 2021, 
                    Izabella deu personalidade ao projeto e nos ajudou a devolver energia para muitos pacientes. 
                    Seu profissionalismo corroborou com nossa missão de trazer um novo olhar para Anemia.'
                />
                <CardTestimonal
                    image={PngAvatarGabriel}
                    name='Gabriel Barreto'
                    subtitle='XP Inc.'
                    description='A Iza consegue falar de um tema tão sensível, 
                    em um momento delicado, com leveza, empatia e humanidade. Suas palavras transmitiram otimismo e 
                    confiança para evoluirmos com as questões de saúde mental dentro da companhia.

                    O bate-papo com a Izabella foi revigorante.'
                />
            </Galery>
        </>
    )
}

export default GaleryTestimonal