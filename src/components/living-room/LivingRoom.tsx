import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CarouselTv from '../carousel-tv/CarouselTv'
import { PngCellphone, PngRack, PngShadowLiving, PngTedX1, PngTedX2, PngTedX3, PngTv } from '../../assets/png'
import Button from '../button/Button'
import './LivingRoom.css'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const LivingRoom = () => {

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
                .to('.img-shadow-living', {
                    x: '+=120vh',
                    ease: 'none',
                }, 0)
        })
    }, [])

    //mobile
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add('screen and (max-width: 768px)', () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.living-room-container-second',
                    start: '20% bottom',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            })
            tl.from('.tv-mobile', {
                y: '50%',
                duration: 1,
                opacity: 0,
                delay: .6,
                stagger: .3,
            })
        })
    }
    )

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
                    <div id='living-room-second' className='living-room-second'>
                        <div className='content-wrapper'>
                            <img className='cellphone' src={PngCellphone} />
                            <h2>Já conhece o Podcast Interioriza?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec porttitor, massa id maximus efficitur, mi nulla molestie velit,
                                efficitur. </p>
                            <Button
                                newTab
                                link='https://podcasters.spotify.com/pod/show/izabella-camargo3'
                                text='Ouvir agora'
                                hoverColor='#2B3836'
                            />
                        </div>
                    </div>
                </div>
            </div >
            <div id='living-room-second' className='living-room-container-second snap-item'>
                <div className='tv-col-mobile'>
                    <Link target='_blank' to='https://www.youtube.com/watch?v=UJeSe18J1m0&ab_channel=TEDxTalks'>
                        <img className='tv-mobile' src={PngTedX1} />
                    </Link>
                    <Link target='_blank' to='https://www.youtube.com/watch?v=ZucqBl_CFvo&ab_channel=TEDxTalks'>
                        <img className='tv-mobile' src={PngTedX2} />
                    </Link>
                    <Link target='_blank' to='https://www.youtube.com/watch?v=58GGgSsNOKU&t=166s&ab_channel=TEDxTalks'>
                        <img className='tv-mobile' src={PngTedX3} />
                    </Link>
                </div>
                <img className='rack-mobile' src={PngRack} />
            </div >
        </>

    )
}


export default LivingRoom