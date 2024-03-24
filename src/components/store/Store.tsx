import { PngPlant, PngShadowStore, PngTBack, PngTFront } from '../../assets/png'
import Button from '../button/Button'
import './Store.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

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

    useGSAP(() => {
        const enterElementsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.store-container',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
                snap: 1,
            },
            ease: 'none'
        })
        enterElementsTl.from('.img-plant', {
            y: 260,
            duration: .6
        })
        enterElementsTl.from('.content-wrapper-store', {
            y: 320,
            duration: .6
        }, 0)
        enterElementsTl.from('.img-t-front', {
            y: 320,
            duration: .6
        }, 0)
        enterElementsTl.from('.img-t-back', {
            y: 600,
            duration: .6
        }, 0)
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
