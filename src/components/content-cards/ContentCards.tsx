import './ContentCards.css';
import Button from '../button/Button';
import { PngRodaVida, PngIzaCard, PngShadowCards } from '../../assets/png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject, createRef, forwardRef, useRef } from 'react';
import { useGSAP } from '@gsap/react';

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
        <div onMouseLeave={() => onLeave(id)} onMouseEnter={() => onHover(id)} ref={ref} className="card-info">
            <div className="content-wrapper">
                <div className='subtitle'>{subtitle}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <Button newTab text={ctaText} />
            <img className='img-wrapper' src={image} alt="placeholder" />
        </div>
    )
})

const ContentCards = () => {
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
        <div id='content-cards' className='card-frame'>
            <div className='shadow-cards'>
                <img src={PngShadowCards} />
            </div>
            <div className='card-container snap-item'>
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
        </div>
    )
}

export default ContentCards;