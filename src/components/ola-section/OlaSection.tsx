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
import { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const OlaSection = () => {

    const [mouseMove, setMouseMove] = useState({ x: 50, y: 50 })
    const [dontMove, setDontMove] = useState(true)

    //parallax move controls
    const PLANT_1_MOVE_DIST = 0.15
    const PLANT_2_MOVE_DIST = 0.1
    const PLANT_3_MOVE_DIST = 0.15
    const IZA_MOVE_DIST = 0.3
    const LIGHT_MOVE_DIST = 0.2
    const SHADOW_MOVE_DIST = { x: 0.5, y: 0.5 }

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.ola-container',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
            },
            onStart: () => setDontMove(true),
            onComplete: () => setDontMove(false),
            onUpdate: () => setDontMove(true),
        })
        tl.from('.ola-content', {
            y: '10%',
            ease: 'ease.inOut',
            opacity: 0,
            delay: .3,
            stagger: .1,
        })
            .from('.ola-first img', {
                y: '24%',
                ease: 'ease.inOut',
                stagger: .2,
            }, 0)
    }, [])
    //mousemove listener
    useEffect(() => {

        const handleMouseMove = (e: any) => {
            setMouseMove({ x: e.clientX / window.innerWidth * 100, y: e.clientY / window.innerHeight * 100 })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])
    //parallax effect
    useEffect(() => {
        if (dontMove) return
        const handleParallax = () => {
            const matchMedia = gsap.matchMedia()
            matchMedia.add("(min-width: 800px)", () => {
                gsap.set('.img-plant-1', {
                    x: (mouseMove.x - 50) * PLANT_1_MOVE_DIST,
                });
                gsap.set('.img-iza-recorte', {
                    x: (mouseMove.x - 50) * IZA_MOVE_DIST,
                });
                gsap.set('.img-light-ola', {
                    x: (mouseMove.x - 50) * LIGHT_MOVE_DIST,
                });
                gsap.set('.img-plant-2', {
                    x: (mouseMove.x - 50) * PLANT_2_MOVE_DIST,
                });
                gsap.set('.img-plant-3', {
                    x: (mouseMove.x - 50) * PLANT_3_MOVE_DIST,
                });
                gsap.set('.img-shadow-ola', {
                    x: (mouseMove.x - 50) * SHADOW_MOVE_DIST.x,
                    y: (mouseMove.y - 50) * SHADOW_MOVE_DIST.y,
                });
            })
        }
        handleParallax()

        return () => {
            gsap.getTweensOf('.img-plant-1').forEach(tween => tween.kill())
            gsap.getTweensOf('.img-iza-recorte').forEach(tween => tween.kill())
            gsap.getTweensOf('.img-light-ola').forEach(tween => tween.kill())
            gsap.getTweensOf('.img-plant-2').forEach(tween => tween.kill())
            gsap.getTweensOf('.img-plant-3').forEach(tween => tween.kill())
        }

    }, [mouseMove, dontMove])

    useGSAP(() => {
        let matchMedia = gsap.matchMedia()
        matchMedia.add("(min-width: 800px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.ola-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },

            })
            tl.to('.sections-wrapper', {
                x: '-100vw',
                y: '100vh',
                ease: 'none',
            })
        })
    }, [])

    return (
        <>
            <div id='ola-section-first' className='ola-container snap-item'>
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
                            <div className='img-plant-1'>
                                <img src={PngPlan1Ola} alt='plant' />
                            </div>
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
                        <div className='ola-mobile-txt'>
                            <h1>Minha história</h1>
                            <Button text='Acesse' link='/minha-historia' />
                        </div>
                        <img src={PngPlang3Ola} className='img-plant-3' alt='plant' />
                        <img src={PngSofa} className='img-sofa' alt='sofa' />
                    </div>
                </div>
            </div>
            <div id='ola-section-second' className='ola-container-second snap-item' />
        </>
    )
}

export default OlaSection