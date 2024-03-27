import { PngIzaAbout, PngMinhaHistoriaHero } from "../../assets/png";
import './MinhaHistoria.css';
import MenuWrapper from "../menu/MenuWrapper";
import Galery from "../galery/Galery";
import { PngGalery1, PngGalery2, PngGalery3, PngGalery4 } from '../../assets/png';

export const imgArray = [
    { src: PngGalery1 },
    { src: PngGalery2 },
    { src: PngGalery3 },
    { src: PngGalery4 },
]

import clientsArray from '../../assets/png/clients/clientsArray';
import Footer from "../footer/Footer";
import HeroInternal from "../hero/HeroInternal";

const MinhaHistoria = () => {
    return (
        <>
            <MenuWrapper whichIsActive='minha-historia' />
            <HeroInternal
                img={PngMinhaHistoriaHero}
                pageName='Minha História'
                quote='O tempo é fruto das condições que você  determina.'
            />
            <div className='about-me-container'>
                <div className='about-me-wrapper'>
                    <div className='about-me-col'>
                        <div className='iza-name-wrapper'>
                            <img src={PngIzaAbout} alt='Iza Avatar' />
                            <h4>Izabella Camargo</h4>
                        </div>
                        <div className='tags-wrapper'>
                            <p>Jornalista</p>
                            <p>Palestrante</p>
                            <p>Mentora</p>
                            <p>Apresentadora</p>
                            <p>Curadora</p>
                            <p>Escritora</p>
                            <p>Influenciadora</p>
                            <p>Linkedin Creator</p>
                            <p>Podcaster</p>
                        </div>
                        <div className='spacer' />
                        <div className='linkedin-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2722 13.4239C17.2722 10.7778 15.9741 10.2222 14.884 10.2222L14.8827 10.2196C14.3121 10.2101 13.7564 10.4022 13.3134 10.762C12.9363 11.077 12.6443 11.4817 12.4642 11.9389C12.3411 12.309 12.2884 12.6988 12.3089 13.0882V20.9976H7.59439C7.59439 20.987 7.59482 20.8888 7.59557 20.7171C7.60384 18.8288 7.65111 8.04299 7.59439 6.83627H12.3089V8.84258C12.6758 8.24276 13.1587 7.72223 13.7294 7.31152C14.5663 6.75715 15.5539 6.47484 16.5573 6.5032C17.2768 6.47452 17.9942 6.59834 18.6624 6.86652C19.3306 7.1347 19.9345 7.54118 20.4345 8.05928C21.5447 9.41014 22.0992 11.1328 21.9854 12.8776V21.0002H17.2722V13.4239ZM0.270513 20.9976V6.83758L4.9837 6.83495V20.9976H0.270513ZM1.66771 0.129623C1.98711 0.021588 2.32536 -0.0194676 2.66134 0.00901709C2.99798 -0.0169848 3.33635 0.0270239 3.65515 0.138268C3.97393 0.249512 4.26623 0.425581 4.5136 0.655378C4.76097 0.885176 4.95805 1.16372 5.09244 1.47346C5.22682 1.78319 5.29559 2.1174 5.2944 2.45503C5.29984 2.77759 5.23936 3.09785 5.11666 3.39621C4.99396 3.69457 4.81163 3.96473 4.58084 4.19015C4.04918 4.67372 3.34927 4.92985 2.63106 4.90368H2.60078C2.2642 4.92384 1.92707 4.87443 1.61044 4.75853C1.2938 4.64262 1.00445 4.46272 0.760434 4.23003C0.516418 3.99734 0.322974 3.71686 0.192172 3.40609C0.0613698 3.09533 -0.0039833 2.76094 0.000187793 2.4238C0.00435888 2.08666 0.0779656 1.75399 0.216417 1.44656C0.354868 1.13912 0.555192 0.863515 0.804891 0.636933C1.05459 0.410352 1.3483 0.237657 1.66771 0.129623Z" fill="white" />
                            </svg>
                            <p>Acessar Linkedin</p>
                        </div>
                    </div>
                    <div className='about-me-txt'>
                        <p id='about-p'>
                            Paranaense, mãe, jornalista, apresentadora, palestrante
                            promotora de saúde, bem-estar no trabalho e longevidade.
                            <br /><br />
                            Criadora do movimento pela Produtividade Sustentável para
                            que profissionais e empresas a alcancem os seus objetivos
                            de carreira e de negócio sem prejuízos pelo caminho, sem
                            perder a saúde e os relacionamentos. Ajudo CNPJs e CPF a
                            falarem a mesma língua.
                            <br /><br />
                            Atua junto aos RHs, lideranças & liderados e apoiando as
                            áreas de Sustentabilidade e ESG em organizações de todos
                            os portes e segmentos. Realizo palestras, workshops e
                            treinamentos personalizados.
                            <br /><br />
                            Depois de seu apagão ao vivo na TV Globo, tornou-se uma
                            das pesquisadoras da síndrome de burnout mais respeitadas,
                            além de certificada pela ISMA-BR para o gerenciamento do
                            estresse e em Segurança Psicológica de Times pelo IISPT.
                        </p>
                        <div className='txt-row'>
                            <p>
                                <li>
                                    Idealizadora do movimento pela Produtividade Sustentável;
                                </li>
                                <li>
                                    Pesquisadora da síndrome de burnout;
                                </li>
                                <li>
                                    Curadora de conteúdos relacionados à saúde integral e cultura do trabalho.
                                </li>
                                <li>
                                    É especialista em comunicação e mediação de asssuntos corporativos sensíveis.
                                </li>
                                <li>
                                    Apresenta o Interioriza, podcast número 17 de 2023, do Spotify. Programa de entrevistas sobre assuntos que já passaram do tempo de interiorizarmos.
                                </li>
                                <li>
                                    LinkedIn Top Voice - Categoria: Equilíbrio Vida e Trabalho.
                                </li>
                                <li>
                                    Maior influenciadora de RH do Brasil pelo Prêmio IBest.
                                </li>
                                <li>
                                    3x TEDx Speaker.
                                </li>
                            </p>
                            <p>
                                <li>
                                    Autora Best-Seller - “DÁ UM TEMPO! Como encontrar limite em um mundo sem limites".
                                </li>
                                <li>
                                    Trabalhou como apresentadora e repórter da TV Globo, Band e SBT.
                                </li>
                                <li>
                                    Mais de 500 mil pessoas já assistiram as palestras da jornalista e cerca de 1000 líderes passaram pelo letramento de comunicação assertiva.
                                </li>
                                <li>
                                    Embaixadora do movimento gerar bem-estar da ABQV - Associação Brasileira de qualidade de vida.
                                </li>
                                <li>
                                    Facilitadora em SEGURANÇA PSICOLÓGICA DE TIMES com certificação internacional pelo IISP/Team.As.One e em GERENCIAMENTO DO ESTRESSE pela Isma-BR e UCi, Center for Ocupational and Environmental Health, no 16º e 17º Curso de Gerenciamento do Stress.
                                </li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Galery>
                {
                    imgArray.map((img, index) => {
                        return (
                            <img src={img.src} key={index} alt='galery' />
                        )
                    })
                }
            </Galery>
            <Galery height='60vh' backgroundColor='var(--c-white)' titleColor='var(--c-dark)' title='Clientes'>
                {
                    clientsArray.map((img, index) => {
                        return (
                            <img src={img.src} key={index} alt='galery' />
                        )
                    })
                }
            </Galery>
            <Footer />
        </>
    );
}

export default MinhaHistoria;