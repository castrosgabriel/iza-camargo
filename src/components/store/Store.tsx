import { useLayoutEffect } from 'react'
import { PngPlant, PngShadowStore, PngTBack, PngTFront } from '../../assets/png'
import Button from '../button/Button'
import './Store.css'
import gsap from 'gsap'

type StoreProps = {
    mouseMove: {
        x: number
        y: number
    }
}

const Store = ({ mouseMove }: StoreProps) => {

    const { x, y } = mouseMove
    const handleMouseMove = () => {
        gsap.to('#shadow-store', {
            x: x - 50,
            y: y - 50,
            duration: .2
        })
    }

    useLayoutEffect(() => {
        const enterElementsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.store-container',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
            },
            ease: 'none'
        })
        enterElementsTl.from('.img-plant', {
            y: -100,
            duration: .6
        })
        enterElementsTl.from('.content-wrapper-store', {
            y: -80,
            duration: .6
        }, '-=.6')
        enterElementsTl.from('.img-t-front', {
            y: -100,
            duration: .6
        }, '-=.8')
        enterElementsTl.from('.img-t-back', {
            y: -50,
            duration: .6
        }, '-=1')
    }, [])

    return (
        <div className='store-container' onMouseMove={handleMouseMove}>
            <div className='img-shadow-living'>
                <img id='shadow-store' src={PngShadowStore} />
            </div>
            <img src={PngPlant} className='img-plant' alt='plant-store' />
            <div className='container-full'>
                <div className='content-wrapper-store'>
                    <h3>Conheça nossa loja virtual</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, massa id maximus efficitur, mi nulla molestie velit, efficitur dapibus leo arcu aliquam lectus. Vivamus tempor mauris eu neque tincidunt maximus. </p>
                    <Button text='Acessar loja' />
                </div>
            </div>
            <img src={PngTFront} className='img-t-front' alt='t-front' />
            <img src={PngTBack} className='img-t-back' alt='t-back' />
        </div>
    )
}

export default Store
