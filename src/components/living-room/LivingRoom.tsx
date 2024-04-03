import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CarouselTv from '../carousel-tv/CarouselTv'
import { PngCellphone, PngRack, PngShadowLiving, PngTv } from '../../assets/png'
import Button from '../button/Button'
import './LivingRoom.css'
import { useGSAP } from '@gsap/react'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

type LivingRoomProps = {
    mouseMove: {
        x: number,
        y: number
    }
}

const LivingRoom = ({ mouseMove }: LivingRoomProps) => {

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add('screen and (min-width: 768px)', () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.living-room-first',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                }
            })
            tl.from('.tv', {
                y: '30%',
                duration: 1,
                delay: .6,
            })
                .from('.rack', {
                    y: '30%',
                    duration: 1,
                }, 2)

            const scrollHorTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.living-room',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            })

            scrollHorTl.to('.page-wrapper', {
                ease: 'none',
                x: '-100vw',
                y: '100vh',
            })
        })
    }, [])

    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add('screen and (min-width: 768px)', () => {
            gsap.set('.shadow-living', {
                x: (mouseMove.x - 50) * 1,
                y: (mouseMove.y - 50) * 1,
                duration: .3
            })
        })
    }, [mouseMove])

    return (
        <>
            <div id='living-room-first' className='living-room snap-item'>
                <div className='page-wrapper'>
                    <div className='img-shadow-living'>
                        <img src={PngShadowLiving} className='shadow-living' />
                    </div>
                    <div className='living-room-first'>
                        <img className='rack' src={PngRack} />
                        <div className='tv tv-content'>
                            <CarouselTv />
                        </div>
                        <img className='tv screen' src={PngTv} />
                    </div>
                    <div className='living-room-second'>
                        <div className='img-shadow-living-2'>
                            <img src={PngShadowLiving} className='shadow-living' />
                        </div>
                        <div className='content-wrapper'>
                            <img className='cellphone' src={PngCellphone} />
                            <h2>Já conhece o Podcast Interioriza?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec porttitor, massa id maximus efficitur, mi nulla molestie velit,
                                efficitur. </p>
                            <Button
                                link='https://podcasters.spotify.com/pod/show/izabella-camargo3'
                                text='Ouvir agora'
                                hoverColor='#2B3836'
                            />
                        </div>
                    </div>
                </div>
            </div >
            <div id='living-room-second' className='living-room-container-second snap-item' />
        </>

    )
}


export default LivingRoom