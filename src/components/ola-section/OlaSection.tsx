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
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type olaSectionProps = {
    mouseMove: {
        x: number
        y: number
    }
}

const OlaSection = ({ mouseMove }: olaSectionProps) => {

    const handleParallax = () => {
        gsap.to('.img-plant-1', {
            x: (mouseMove.x - 50) * .3,
            duration: 0.3,
        });
        gsap.to('.img-iza-recorte', {
            x: (mouseMove.x - 50) * .2,
            duration: 0.3,
        });
        gsap.to('.img-light-ola', {
            x: (mouseMove.x - 50) * .6,
            duration: 0.3,
        });
        gsap.to('.img-plant-2', {
            x: (mouseMove.x - 50) * .8,
            duration: 0.3,
        });
        gsap.to('.img-plant-3', {
            x: (mouseMove.x - 50) * .2,
            duration: 0.3,
        });
        gsap.to('.img-shadow-ola', {
            x: (mouseMove.x - 50) * 1,
            y: (mouseMove.y - 50) * 1,
            duration: .3
        });
    }


    useLayoutEffect(() => {
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
                end: '+=300%',
                scrub: 1,
                pin: true,
                snap: 1,
            }
        })


        return (
            () => {
                gsap.killTweensOf('.ola-content')
                gsap.killTweensOf('.ola-first img')
                gsap.killTweensOf('.sections-wrapper')
            }
        )
    }, [])

    return (
        <div className='ola-container' onMouseMove={handleParallax}>
            <div className='sections-wrapper'>
                <div className='img-shadow-ola'>
                    <img src={PngShadowOla} alt='shadow' />
                    <img src={PngShadowOla} alt='shadow' />
                </div>
                <div className='ola-first'>
                    <img src={PngPlan1Ola} className='img-plant-1' alt='plant' />
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
                                <Button text='Minha história' color='var(--c-primary-interaction)' />
                            </div>
                        </div>
                    </div>
                    <img src={PngIzaRecorte} className='img-iza-recorte' alt='iza' />
                    <img src={PngLightOla} className='img-light-ola' alt='light' />
                    <img src={PngPlant2Ola} className='img-plant-2' alt='plant' />
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