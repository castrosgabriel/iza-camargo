import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { PngCellphone, PngRack, PngTv, PngTvContent } from '../../assets/png'
import Button from '../button/Button'
import './LivingRoom.css'

gsap.registerPlugin(ScrollTrigger)

const LivingRoom = () => {

    useLayoutEffect(() => {
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
        gsap.to('.page-wrapper', {
            scrollTrigger: {
                trigger: '.page-wrapper',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
                snap: 1,
            },
            x: '-100vw',
        })

        return () => {
            gsap.killTweensOf('.page-wrapper')
        }
    }, [])

    return (
        <div className='living-room'>
            <div className='page-wrapper'>
                <div className='living-room-first'>
                    <img className='rack' src={PngRack} />
                    <img className='tv tv-content' src={PngTvContent} />
                    <img className='tv' src={PngTv} />
                </div>
                <div className='living-room-second'>
                    <div className='content-wrapper'>
                        <h2>Já conhece o Podcast Interioriza?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, massa id maximus efficitur, mi nulla molestie velit, efficitur dapibus leo arcu aliquam lectus. Vivamus tempor mauris eu neque tincidunt maximus. </p>
                        <Button text='Ouvir agora' hoverColor='#2B3836' />
                    </div>
                    <img className='cellphone' src={PngCellphone} />
                </div>
            </div>
        </div>
    )
}


export default LivingRoom