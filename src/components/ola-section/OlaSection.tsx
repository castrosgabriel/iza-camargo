import Button from '../button/Button'
import { PngPlan1Ola, PngPlant2Ola, PngPlang3Ola, PngIzaRecorte, PngLightOla, PngSofa, PngFrame1, PngFrame2, PngShadowOla } from '../../assets/png'

import './OlaSection.css'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type OlaSectionProps = {
    mouseMove: {
        x: number
        y: number
    }
}

const OlaSection = ({ mouseMove }: OlaSectionProps) => {

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.sections-wrapper',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
            }
        })

        tl.to('.sections-wrapper', {
            x: '-100vw',
        })
        // tl.to('.img-shadow-ola', {
        //     x: '100vw',
        // }, 0)
    }, [])

    const moveShadow = {
        transform: `translate(${(mouseMove.x - 50) * 0.6}px, ${(mouseMove.y - 50) * 0.6}px)`,
    }



    return (
        <div className='ola-container'>
            <div className='sections-wrapper'>
                <img style={moveShadow} src={PngShadowOla} className='img-shadow-ola' alt='shadow' />
                <div className='ola-first'>
                    <img src={PngPlan1Ola} className='img-plant-1' alt='plant' />
                    <div className='max-width'>
                        <div className='ola-content'>
                            <h2>Olá,</h2>
                            <p>
                                <b>Fico muito feliz em saber que você chegou até aqui!</b>
                                <br /><br />
                                Neste site você vai encontrar informações oficiais da jornalista Izabella Camargo e do movimento da Produtividade Sustentável.
                                <br /><br />
                                Já falamos sobre comunicação corporativa e equilíbrio entre objetivos pessoais e profissionais para mais de 500 mil pessoas do Brasil, África, EUA e França.
                            </p>
                            <Button text='Minha história' color='var(--c-primary-interaction)' />
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