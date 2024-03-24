import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import CarouselTv from '../carousel-tv/CarouselTv'
import { PngCellphone, PngRack, PngShadowLiving, PngTv } from '../../assets/png'
import Button from '../button/Button'
import './LivingRoom.css'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type LivingRoomProps = {
    mouseMove: {
        x: number,
        y: number
    }
}

const LivingRoom = ({ mouseMove }: LivingRoomProps) => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.living-room-first',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
                snap: 1
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
                end: '+=400%',
                scrub: 1,
                pin: true,
                snap: 1,
            },
        })

        scrollHorTl.to('.page-wrapper', {
            x: '-100vw',
        })
    }, [])

    const handleMouseMove = () => {
        gsap.to('.img-shadow-living', {
            x: (mouseMove.x - 50) * 1,
            y: (mouseMove.y - 50) * 1,
            duration: .3
        })
    }

    return (
        <div className='living-room' onMouseMove={handleMouseMove}>
            <div className='page-wrapper'>
                <div className='img-shadow-living'>
                    <img src={PngShadowLiving} />
                    <img style={{ transform: 'scaleX(-1)' }} src={PngShadowLiving} />
                </div>
                <div className='living-room-first'>
                    <img className='rack' src={PngRack} />
                    <div className='tv tv-content'>
                        <CarouselTv />
                    </div>
                    <img className='tv screen' src={PngTv} />
                </div>
                <div className='living-room-second'>
                    <div className='content-wrapper'>
                        <h2>Já conhece o Podcast Interioriza?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, massa id maximus efficitur, mi nulla molestie velit, efficitur dapibus leo arcu aliquam lectus. Vivamus tempor mauris eu neque tincidunt maximus. </p>
                        <Button link='https://podcasters.spotify.com/pod/show/izabella-camargo3' text='Ouvir agora' hoverColor='#2B3836' />
                    </div>
                    <img className='cellphone' src={PngCellphone} />
                </div>
            </div>
        </div >
    )
}


export default LivingRoom