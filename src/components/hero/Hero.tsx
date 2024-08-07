import './Hero.css';
import BottomBar from '../bottom-bar/BottomBar';
import { SvgLogo, SvgArrow } from '../../assets/svg';
import { JPGIzaHero, PngIzaOverHero } from '../../assets/png';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PngIzaHeroMobile from '../../assets/png/iza-hero-mobile.png';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

type heroProps = {
    mouseMove: {
        x: number
        y: number
    },
}

const Hero = ({ mouseMove }: heroProps) => {
    const [finishTl, setFinishTl] = useState(false)
    const bottomBarRef = useRef<HTMLDivElement>(null)

    const handleParallax = () => {
        gsap.to('.img-over', {
            y: (mouseMove.y - 50) * .3,
            x: (mouseMove.x - 50) * .3,
            duration: 0.3,
        });
        gsap.to('.img-bg', {
            y: (mouseMove.y - 50) * .8,
            x: (mouseMove.x - 50) * .8,
            duration: 0.3,
        });
    }

    useGSAP(() => {
        const enterElementsTl = gsap.timeline({
            onComplete: () => setFinishTl(true)
        })

        enterElementsTl.from('.hero-logo', {
            scale: .8,
            y: '+=20',
            rotate: '+=40',
            opacity: 0,
            duration: 1,
            ease: 'expo.inOut',
        })
            .from('.title', {
                y: '-=30',
                opacity: 0,
                duration: .3,
                stagger: .1,
                ease: 'expo.inOut',
            }, .4)
            .from('.hero-img', {
                duration: 1,
                opacity: 0,
                scale: 1.2,
                ease: 'expo.inOut',
            }, 0)

        return () => enterElementsTl.kill()
    }, [])

    useGSAP(() => {
        if (finishTl) {
            const leaveElementsTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            })
            leaveElementsTl.to('.hero-img', {
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
        }
    }, [finishTl])

    return (
        <>
            <div id='hero-home' className='hero-container snap-item' onMouseMove={handleParallax}>
                <div style={{ height: '2.3rem' }} />
                <div className='hero-content'>
                    <img alt='logo' src={SvgLogo} className='hero-logo' />
                    <div className='hero-title'>
                        <h1 className='title'>Que bom que <br /> você está aqui.</h1>
                        <img style={{ cursor: 'pointer' }} className='title' src={SvgArrow} alt='arrow' />
                    </div>
                </div>
                <div className='bottom-hero'>
                    <BottomBar ref={bottomBarRef} />
                </div>
            </div>
            <div className='hero-img-wrapper'>
                <img src={PngIzaHeroMobile} className='img-mobile' />
                <div className='hero-img'>
                    <img src={PngIzaOverHero} className='img-over' />
                    <img src={JPGIzaHero} className='img-bg'/>
                </div>
            </div>
        </>
    )
}


export default Hero;