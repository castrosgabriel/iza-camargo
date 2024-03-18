import './Hero.css';
import Header from '../header/Header';
import BottomBar from '../bottom-bar/BottomBar';
import { SvgLogo, SvgArrow } from '../../assets/svg';
import { PngHero } from '../../assets/png';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const bottomBarRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {

        gsap.from('.hero-logo', {
            scale: .8,
            y: '+=20',
            rotate: '+=40',
            opacity: 0,
            duration: 1.5,
            delay: 0,
            ease: 'expo.inOut',
        })
        gsap.from('.title', {
            y: '-=30',
            opacity: 0,
            duration: 1.5,
            stagger: .5,
            delay: .4,
            ease: 'expo.inOut',
        })
        gsap.from(headerRef.current, {
            y: '-=100%',
            duration: 1.5,
            delay: .1,
            ease: 'expo.inOut',
        })
        gsap.from('.hero-img', {
            duration: 1.5,
            opacity: 0,
            scale: 1.2,
            ease: 'expo.inOut',
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-container',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                snap: {
                    snapTo: 1,
                    duration: { min: 0.2, max: 1 },
                    delay: 0,
                    ease: 'power1.inOut',
                }
            }
        })
        tl.to('.hero-img', {
            y: '40%',
            duration: 2,
        }, 0)
            .to(bottomBarRef.current, {
                duration: 2,
                y: '100%',
            }, 0)
            .to('.title', {
                y: '-15vh',
                opacity: 0,
                duration: 1,
                stagger: 1,
            }, 0)
            .to('.hero-logo', {
                scale: 0.8,
                y: '+=100',
                rotate: '+=40',
                opacity: 0,
                duration: 1.5,
            }, 0)
    }, [])

    return (
        <>
            <div className='hero-container'>
                <Header ref={headerRef} />
                <div className='hero-content'>
                    <img alt='logo' src={SvgLogo} className='hero-logo' />
                    <div className='hero-title'>
                        <h1 className='title'>Que bom que <br /> você está aqui.</h1>
                        <img className='title' src={SvgArrow} alt='arrow' />
                    </div>
                </div>
                <BottomBar ref={bottomBarRef} />
            </div>
            <div className='hero-img-wrapper'>
                <img src={PngHero} alt='hero' className='hero-img' />
            </div>
        </>
    )
}


export default Hero;