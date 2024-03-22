import { useLayoutEffect } from 'react';
import { SocialMedia } from '../bottom-bar/BottomBar';
import gsap from 'gsap';
import './Menu.css'

type MenuProps = {
    isShown: boolean
}

type MenuBtnProps = {
    text: string,
    link?: string,
    active?: boolean
}

const MenuBtn = ({ text, link, active }: MenuBtnProps) => {
    return (
        <a href={link}>
            <h2 className={active ? 'menu-btn active' : 'menu-btn inactive'}>
                {text}
            </h2>
        </a>
    )
}

const menuArray = [
    { text: 'Home', link: 'https://www.google.com.ar/maps/preview', active: true },
    { text: 'Minha História' },
    { text: 'Palestras' },
    { text: 'Mentorias' },
    { text: 'Loja' },
    { text: 'Contato' }
];

const Menu = ({ isShown }: MenuProps) => {

    useLayoutEffect(() => {
        if (isShown) {
            gsap.to('.menu-wrapper', {
                duration: 0.6,
                x: 0,
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
                    {menuArray.map((item, index) => <MenuBtn key={index} active={item.active} link={item.link} text={item.text} />)}
                </div>
                <div className='social-media-wrapper'>
                    <SocialMedia />
                </div>
            </div>
        </div >
    );
}

export default Menu;