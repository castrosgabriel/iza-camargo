import { useLayoutEffect } from 'react';
import { SocialMedia } from '../bottom-bar/BottomBar';
import gsap from 'gsap';
import './Menu.css'

type MenuProps = {
    isShown: boolean
}

const Menu = ({ isShown }: MenuProps) => {

    useLayoutEffect(() => {
        if (isShown) {
            gsap.to('.menu-wrapper', {
                duration: 0.6,
                x: 0,
                ease: 'circ.inOut'
            })
            gsap.to('.content-web', {
                duration: 0.6,
                x: '-20%',
                ease: 'circ.inOut'
            })
            gsap.to('.menu-content h2', {
                duration: 0.5,
                x: 0,
                opacity: 1,
                stagger: 0.1,
                ease: 'circ.inOut'
            })
        } else {
            gsap.to('.menu-wrapper', {
                duration: 0.6,
                x: '100%',
                ease: 'circ.inOut'
            })
            gsap.to('.content-web', {
                duration: 0.6,
                x: '0',
                ease: 'circ.inOut'
            })
            gsap.to('.menu-content h2', {
                duration: 0.2,
                x: 100,
                opacity: 0,
                stagger: 0.1,
                ease: 'circ.inOut'
            })
        }

        return () => {
            gsap.killTweensOf('.menu-wrapper')
            gsap.killTweensOf('.content-web')
            gsap.killTweensOf('.menu-content h2')
        }
    }, [isShown])

    return (
        <div className='menu-container'>
            <div className='menu-wrapper'>
                <div className='menu-content'>
                    <h2>Home</h2>
                    <h2>Minha História</h2>
                    <h2>Palestras</h2>
                    <h2>Mentorias</h2>
                    <h2>Loja</h2>
                    <h2>Contato</h2>
                </div>
                <div className='social-media-wrapper'>
                    <SocialMedia />
                </div>
            </div>
        </div >
    );
}

export default Menu;