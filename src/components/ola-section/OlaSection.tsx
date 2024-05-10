import Button from '../button/Button'
import {
    PngPlan1Ola,
    PngPlant2Ola,
    PngPlang3Ola,
    PngIzaRecorte,
    PngLightOla,
    PngSofa,
    PngFrame1,
    PngShadowOla,
    PngFrame3,
    PngLetramentoFrame,
    PngMestreFrame,
    PngCampanhasFrame
} from '../../assets/png'
import './OlaSection.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

type FrameItemProps = {
    title: string;
    link: string;
    img: string;
}

const FrameItem = ({ title, link, img }: FrameItemProps) => {
    return (
        <Link to={link}>
            <div className='frame-item'>
                <Button text='Acesse' link={link} />
                <h2>{title}</h2>
                <img src={img} />
            </div>
        </Link>
    )
}

const OlaSection = () => {

    const [mouseMove, setMouseMove] = useState({ x: 50, y: 50 })
    const [dontMove, setDontMove] = useState(true)

    //parallax move controls
    const PLANT_1_MOVE_DIST = 0.15
    const PLANT_2_MOVE_DIST = 0.1
    const PLANT_3_MOVE_DIST = 0.15
    const IZA_MOVE_DIST = 0.3
    const LIGHT_MOVE_DIST = 0.2

    useEffect(() => {
        const mm = gsap.matchMedia()
        mm.add("(min-width: 768px)", () => {
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

            const scrollHor = gsap.timeline({
                scrollTrigger: {
                    trigger: '.ola-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            })

            scrollHor.to('.sections-wrapper', {
                x: '-100vw',
                y: '100vh',
                ease: 'none',
            })
                .to('.img-shadow-ola', {
                    x: '70vw',
                    ease: 'none',
                }, 0)
        })

        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.ola-container',
                    start: '50% bottom',
                    end: 'bottom bottom',
                    scrub: 2,
                },
            })
            tl.from('.ola-mobile-txt', {
                y: '20%',
                ease: 'ease.inOut',
                opacity: 0,
                delay: 0.4,
            })
                .from('.frame-container', {
                    y: '10%',
                    opacity: 0,
                }, 0)
        })

        const handleMouseMove = (e: any) => { setMouseMove({ x: e.clientX / window.innerWidth * 100, y: e.clientY / window.innerHeight * 100 }) }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    //parallax effect
    useGSAP(() => {
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
        const mm = gsap.matchMedia()
        mm.add("(max-width: 768px)", () => {

            const slideTl = gsap.timeline({
                scrollTrigger: {
                    scroller: '.frame-container',
                    horizontal: true,
                    trigger: '.item-2',
                    scrub: true,
                    start: 'left 5%',
                    end: 'right 30%',
                }
            })
            slideTl.from('.item-3 h2', {
                opacity: 0,
            })
                .from('.item-3 button', {
                    opacity: 0,
                }, 0)
                .to('.item-2 h2', {
                    opacity: 0,
                }, 0)
                .to('.item-2 button', {
                    opacity: 0,
                }, 0)

            const slideTl2 = gsap.timeline({
                scrollTrigger: {
                    scroller: '.frame-container',
                    horizontal: true,
                    trigger: '.item-1',
                    scrub: true,
                    start: 'left 5%',
                    end: 'right 30%',
                }
            })

            slideTl2.to('.item-1 h2', {
                opacity: 0,
            })
                .to('.item-1 button', {
                    opacity: 0,
                }, 0)
                .from('.item-2 h2', {
                    opacity: 0,
                }, 0)
                .from('.item-2 button', {
                    opacity: 0,
                }, 0)
        })
    }, [])

    return (
        <>
            <div id='ola-section-first' className='ola-container snap-item'>
                <div className='sections-wrapper'>
                    <div className='img-shadow-ola'>
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
                                    Aqui você irá encontrar informações oficiais sobre mim e do movimento da Produtividade
                                    Sustentável.
                                    <br /><br />
                                    Já falamos sobre comunicação corporativa e equilíbrio entre objetivos pessoais e
                                    profissionais para mais de 500 mil pessoas do Brasil, África, EUA e França.
                                </p>
                                <div>
                                    <Button text='Sobre mim' link='/minha-historia' color='var(--c-primary-interaction)' />
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
                    <div id='ola-second' className='ola-second'>
                        <div className='frame-container'>
                            <div className='mobile-only'>
                                <FrameItem
                                    title='Sobre mim'
                                    link='/minha-historia'
                                    img={PngFrame3}
                                />
                            </div>
                            <FrameItem
                                title='Palestras'
                                link='/palestras'
                                img={PngFrame1}
                            />

                            <FrameItem
                                title='Letramento'
                                link='/mentorias'
                                img={PngLetramentoFrame}
                            />
                            <FrameItem
                                title='Mestre de Cerimônias'
                                link='/mestre'
                                img={PngMestreFrame}
                            />
                            <FrameItem
                                title='Campanhas e Ações'
                                link='/campanhas'
                                img={PngCampanhasFrame}
                            />
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