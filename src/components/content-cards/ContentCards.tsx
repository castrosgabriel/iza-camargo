import './ContentCards.css';
import Button from '../button/Button';
import { PngRodaVida, PngIzaCard, PngShadowCards, PngAcessoRapido } from '../../assets/png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject, createRef, forwardRef, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SvgArrow } from '../../assets/svg';

type CardProps = {
    id: number;
    title: string
    description: string
    image?: string
    ctaText: string
    subtitle: string
    onHover: (id: number) => void;
    onLeave: (id: number) => void;
    link?: string;
}

gsap.registerPlugin(ScrollTrigger)

const Card = forwardRef<HTMLDivElement, CardProps>(({ id, title, description, image, ctaText, subtitle, onHover, onLeave, link }, ref) => {
    return (
        <div onMouseLeave={() => onLeave(id)} onMouseEnter={() => onHover(id)} ref={ref} className="card-info">
            <div className="content-wrapper">
                <div className='subtitle'>{subtitle}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Button newTab text={ctaText} link={link} />
            {
                image && <img className='img-wrapper' src={image} alt="placeholder" style={{borderRadius: '50%'}}/>
            }
        </div>
    )
})

const RIGHT = 1;
const LEFT = -1;

import React from 'react';

type ScrollHandlerProps = {
    direction: number;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ direction }) => {

    const handleScroll = (side: number) => {
        gsap.to('.card-frame', {
            scrollTo: {
                x: `-=${side * 640}`
            },
            duration: 1,
            ease: 'power3.inOut'
        })
    }

    return (
        <div className='card-arrow' style={{
            position: 'absolute',
            left: direction === RIGHT ? 0 :  'calc(100vw - 13rem)' ,
        }}>
            <img src={SvgArrow} style={{rotate:`${direction * 90}deg` }} onClick={() => { handleScroll(direction) }} />
        </div>
    )
}

const ContentCards = () => {
    const cardData = [
        {
            subtitle: 'Como está seu tempo?',
            title: 'Roda da vida',
            description: 'Uma das grandes ilusões é tentar dar conta de uma agenda atual com as características que tínhamos no passado. Se você quiser ter uma fotografia do seu tempo atual, preencha essa roda da vida, do centro para as extremidades, e perceba qual área você está demais e qual área você está de menos na sua própria vida.',
            image: PngRodaVida,
            ctaText: 'Acessar',
            link: 'https://produtividadesustentavel.com.br/roda-da-vida/',
        },
        {
            subtitle: 'Como está sua saúde mental?',
            title: 'Pesquisa',
            description: 'Selecionei algumas perguntas que vão te ajudar a organizar as ideias e alcançar as respostas que você pode estar precisando. Agradeço seu tempo e confiança. "A saúde mental afeta tudo e tudo afeta a saúde mental!"',
            image: PngIzaCard,
            ctaText: 'Responder',
            link: 'https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAG4j-rxUNEs5Rzk5SjEwNzQ5M1BVQkoyMVZDUTQ3Ri4u',
        },
        {
            subtitle: 'EPIS DA SAÚDE MENTAL',
            title: 'Manifesto',
            description: 'Unimos necessidades, vontades e esforços para garantir que cada membro da força de trabalho possa operar em um ambiente de trabalho seguro, saudável e que promova o bem-estar integral. Juntos, podemos transformar o ambiente de trabalho e assim avançarmos rumo à Produtividade Sustentável.',
            image: PngAcessoRapido,
            ctaText: 'Assine agora!',
            link: 'https://episdasaudemental.com.br',
        },
    ];

    const cardsRefs = useRef<RefObject<HTMLDivElement>[]>(cardData.map(() => createRef()));

    useGSAP(() => {
        const mm = gsap.matchMedia()
        mm.add('screen and (min-width: 768px)', () => {
            gsap.from('.card-info', {
                scrollTrigger: {
                    trigger: '.card-container',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true
                },
                opacity: 1,
                duration: 1,
                stagger: 0.4,
                delay: 1,
                y: '10rem',
            })
        })
        mm.add('screen and (max-width: 768px)', () => {
            gsap.from('.card-info', {
                opacity: 0,
                stagger: 0.4,
                y: '20%',
                scrollTrigger: {
                    trigger: '.card-container',
                    start: '40% bottom',
                    end: '90% bottom',
                    scrub: 2,
                },
            })
        })
    }, [])

    const handleCtaEnter = (id: number) => {
        const mm = gsap.matchMedia()
        mm.add('screen and (min-width: 768px)', () => {
            const currentRef = cardsRefs.current[id];
            if (currentRef && currentRef.current) {
                gsap.to(currentRef.current, {
                    scale: 1.05,
                    duration: 0.5,
                })
            }

            cardsRefs.current.forEach((ref, index) => {
                if (index !== id && ref.current) {
                    gsap.to(ref.current, {
                        scale: .95,
                        duration: 0.5
                    })
                }
            })
        })
    }

    const handleCtaLeave = () => {
        const mm = gsap.matchMedia()
        mm.add('screen and (min-width: 768px)', () => {
            cardsRefs.current.forEach((ref) => {
                if (ref.current) {
                    gsap.to(ref.current, {
                        scale: 1,
                        duration: 0.5
                    })
                }
            });
        })
    };


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
        }}>
            <ScrollHandler direction={LEFT} />
            <div id='content-cards' className='card-frame snap-item'>

                <div className='shadow-cards'>
                    <img src={PngShadowCards} />
                </div>
                <div className='card-container'>
                    {cardData.map((card, index) => (
                        <Card
                            onHover={handleCtaEnter}
                            onLeave={handleCtaLeave}
                            key={index}
                            id={index}
                            ref={cardsRefs.current[index] = createRef()}
                            subtitle={card.subtitle}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            ctaText={card.ctaText}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
            <ScrollHandler direction={RIGHT} />
        </div>
    )
}

export default ContentCards;