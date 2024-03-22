import './ContentCards.css';
import Button from '../button/Button';
import { PngRodaVida, PngIzaCard, PngShadowCards } from '../../assets/png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject, createRef, forwardRef, useLayoutEffect, useRef } from 'react';

type CardProps = {
    id: number;
    title: string
    description: string
    image: string
    ctaText: string
    subtitle: string
    onHover: (id: number) => void;
    onLeave: (id: number) => void;
}

gsap.registerPlugin(ScrollTrigger)

const Card = forwardRef<HTMLDivElement, CardProps>(({ id, title, description, image, ctaText, subtitle, onHover, onLeave }, ref) => {
    return (
        <div ref={ref} className="card-info">
            <div className="content-wrapper">
                <div className='subtitle'>{subtitle}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Button onMouseEnter={() => onHover(id)} onMouseLeave={() => onLeave(id)} text={ctaText} />
            <img className='img-wrapper' src={image} alt="placeholder" />
        </div>
    )
})

type contentCardsProps = {
    mouseMove: {
        x: number
        y: number
    }
}

const ContentCards = ({ mouseMove }: contentCardsProps) => {

    const cardData = [
        {
            subtitle: 'Como está seu tempo?',
            title: 'Roda da vida',
            description: 'Uma das grandes ilusões é tentar dar conta de uma agenda atual com as características que tínhamos no passado. Se você quiser ter uma fotografia do seu tempo atual, preencha essa roda da vida, do centro para as extremidades, e perceba qual área você está demais e qual área você está de menos na sua própria vida.',
            image: PngRodaVida,
            ctaText: 'Acessar'
        },
        {
            subtitle: 'Como está sua saúde mental?',
            title: 'Pesquisa',
            description: 'Selecionei algumas perguntas que vão te ajudar a organizar as ideias e alcançar as respostas que você pode estar precisando. Agradeço seu tempo e confiança. "A saúde mental afeta tudo e tudo afeta a saúde mental!"',
            image: PngIzaCard,
            ctaText: 'Responder'
        }
    ];

    const cardsRefs = useRef<RefObject<HTMLDivElement>[]>(cardData.map(() => createRef()));

    useLayoutEffect(() => {
        gsap.from(
            '.card-info',
            {
                scrollTrigger: {
                    trigger: '.card-container',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: 1,
                    snap: {
                        snapTo: 1,
                        duration: { min: 0.1, max: .8 },
                        delay: 0,
                        ease: 'power1.inOut',
                    },
                },
                opacity: 0,
                duration: 1,
                stagger: 0.4,
                delay: 1,
                y: '10rem',
            }
        )

        return () => {
            gsap.killTweensOf('.card-info')
        }

    }, [])

    const handleCtaEnter = (id: number) => {
        const currentRef = cardsRefs.current[id];
        if (currentRef && currentRef.current) {
            gsap.to(currentRef.current, {
                scale: '+=0.05',
                opacity: 1,
                duration: 0.5,
            })
            gsap.to(currentRef.current.querySelector('.img-wrapper'), {
                scale: 1.2,
                duration: 0.4,
                ease: 'power1.inOut',
                delay: 0.1,
                y: -15,
            })
        }

        cardsRefs.current.forEach((ref, index) => {
            if (index !== id && ref.current) {
                gsap.to(ref.current, {
                    scale: '-=0.05',
                    opacity: '-=0.6',
                    duration: 0.5
                })
            }
        })
    }

    const handleCtaLeave = (id: number) => {
        cardsRefs.current.forEach((ref) => {
            if (ref.current) {
                gsap.to(ref.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5
                })
                gsap.to(ref.current.querySelector('.img-wrapper'), {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power1.inOut',
                    y: 0,
                });
            }
        });
    };

    const handleShadowMove = () => {
        gsap.to('.shadow-cards>img', {
            x: (mouseMove.x - 50),
            y: (mouseMove.y - 50),
            duration: 0.3,
        });
    }


    return (
        <div className='card-container' onMouseMove={handleShadowMove}>
            <div className='shadow-cards'>
                <img src={PngShadowCards} alt="shadow-cards" />
            </div>
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
                />
            ))}
        </div>
    )
}

export default ContentCards;