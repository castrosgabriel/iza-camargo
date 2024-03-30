import Button from '../button/Button'
import {
    PngPlan1Ola,
    PngPlant2Ola,
    PngPlang3Ola,
    PngIzaRecorte,
    PngLightOla,
    PngSofa,
    PngFrame1,
    PngFrame2,
    PngShadowOla
} from '../../assets/png'
import './OlaSection.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type olaSectionProps = {
    mouseMove: {
        x: number
        y: number
    },
}

const OlaSection = ({ mouseMove }: olaSectionProps) => {

    //parallax move controls
    const PLANT_1_MOVE_DIST = 0.15
    const PLANT_2_MOVE_DIST = 0.1
    const PLANT_3_MOVE_DIST = 0.15
    const IZA_MOVE_DIST = 0.3
    const LIGHT_MOVE_DIST = 0.2
    const SHADOW_MOVE_DIST = { x: 0.5, y: 0.5 }

    const handleParallax = () => {
        gsap.to('.img-plant-1', {
            x: (mouseMove.x - 50) * PLANT_1_MOVE_DIST,
            duration: 0.3,
        });
        gsap.to('.img-iza-recorte', {
            x: (mouseMove.x - 50) * IZA_MOVE_DIST,
            duration: 0.3,
        });
        gsap.to('.img-light-ola', {
            x: (mouseMove.x - 50) * LIGHT_MOVE_DIST,
            duration: 0.3,
        });
        gsap.to('.img-plant-2', {
            x: (mouseMove.x - 50) * PLANT_2_MOVE_DIST,
            duration: 0.3,
        });
        gsap.to('.img-plant-3', {
            x: (mouseMove.x - 50) * PLANT_3_MOVE_DIST,
            duration: 0.3,
        });
        gsap.to('.img-shadow-ola', {
            x: (mouseMove.x - 50) * SHADOW_MOVE_DIST.x,
            y: (mouseMove.y - 50) * SHADOW_MOVE_DIST.y,
            duration: .3
        });
    }


    useGSAP(() => {
        gsap.from('.ola-content', {
            y: '10%',
            duration: 1,
            ease: 'ease.inOut',
            opacity: 0,
            delay: .3,
            stagger: .1,
            scrollTrigger: {
                trigger: '.ola-first',
                start: 'top center',
            }
        })

        gsap.from('.ola-first img', {
            y: '+=24%',
            duration: 1,
            ease: 'ease.inOut',
            stagger: .2,
            scrollTrigger: {
                trigger: '.ola-first',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
            }
        })


        gsap.to('.sections-wrapper', {
            x: '-100vw',
            scrollTrigger: {
                trigger: '.ola-container',
                start: 'top top',
                end: '+=100%',
                scrub: 1,
                pin: true,
            }
        })
    }, [])

    return (
        <div className='ola-container' onMouseMove={handleParallax}>
            <div className='sections-wrapper'>
                <div className='img-shadow-ola'>
                    <img src={PngShadowOla} alt='shadow' />
                    <img src={PngShadowOla} alt='shadow' />
                </div>
                <div className='ola-first'>
                    <div className='max-width'>
                        <div className='ola-content'>
                            <h2>
                                Olá,
                            </h2>
                            <p>
                                <b>Fico muito feliz em saber que você chegou até aqui!</b>
                                <br /><br />
                                Neste site você vai encontrar informações oficiais da jornalista Izabella Camargo
                                e do movimento da Produtividade Sustentável.
                                <br /><br />
                                Já falamos sobre comunicação corporativa e equilíbrio entre objetivos pessoais
                                e profissionais para mais de 500 mil pessoas do Brasil, África, EUA e França.
                            </p>
                            <div>
                                <Button text='Minha história' link='/minha-historia' color='var(--c-primary-interaction)' />
                            </div>
                        </div>
                    </div>
                    <div className='first-img-wrapper'>
                        <img src={PngPlan1Ola} className='img-plant-1' alt='plant' />
                        <img src={PngIzaRecorte} className='img-iza-recorte' alt='iza' />
                        <img src={PngLightOla} className='img-light-ola' alt='light' />
                        <img src={PngPlant2Ola} className='img-plant-2' alt='plant' />
                    </div>
                </div>
                <div className='ola-second'>
                    <div className='frame-container'>
                        <img src={PngFrame1} />
                        <img src={PngFrame2} />
                    </div>
                    <img src={PngPlang3Ola} className='img-plant-3' alt='plant' />
                    <img src={PngSofa} className='img-sofa' alt='sofa' />
                </div>
            </div>
        </div>
    )
}

export default OlaSection