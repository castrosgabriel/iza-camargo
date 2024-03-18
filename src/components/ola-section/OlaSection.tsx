import Button from '../button/Button'
import { PngPlan1Ola, PngPlant2Ola, PngPlang3Ola, PngIzaRecorte, PngLightOla, PngSofa, PngFrame1, PngFrame2, PngShadowOla } from '../../assets/png'

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

    const moveImg = (distance: number) => {
        return {
            transform: `translateX(${(mouseMove.x - 50) * distance}px`
        }
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

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.ola-container',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
                // snap: 1,
            }
        })

        tl.to('.sections-wrapper', {
            x: '-100vw',
        })

        return (
            () => {
                tl.kill()
            }
        )
    }, [])

    const moveShadow = {
        transform: `translate(${mouseMove.x - 50}px, ${mouseMove.y - 50}px)`,
    }

    return (
        <div className='ola-container'>
            <div className='sections-wrapper'>
                <img style={moveShadow} src={PngShadowOla} className='img-shadow-ola' alt='shadow' />
                <div className='ola-first'>
                    <img src={PngPlan1Ola} style={moveImg(.4)} className='img-plant-1' alt='plant' />
                    <div className='max-width'>
                        <div className='ola-content'>
                            <h2>
                                Olá,
                            </h2>
                            <p>
                                <b>Fico muito feliz em saber que você chegou até aqui!</b>
                                <br /><br />
                                Neste site você vai encontrar informações oficiais da jornalista Izabella Camargo e do movimento da Produtividade Sustentável.
                                <br /><br />
                                Já falamos sobre comunicação corporativa e equilíbrio entre objetivos pessoais e profissionais para mais de 500 mil pessoas do Brasil, África, EUA e França.
                            </p>
                            <div>
                                <Button text='Minha história' color='var(--c-primary-interaction)' />
                            </div>
                        </div>
                    </div>
                    <img src={PngIzaRecorte} style={moveImg(.2)} className='img-iza-recorte' alt='iza' />
                    <img src={PngLightOla} style={moveImg(.7)} className='img-light-ola' alt='light' />
                    <img src={PngPlant2Ola} style={moveImg(1.2)} className='img-plant-2' alt='plant' />
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