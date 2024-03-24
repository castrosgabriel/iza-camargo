import { SocialMedia } from '../bottom-bar/BottomBar';
import gsap from 'gsap';
import './Menu.css'
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

type MenuProps = {
    isShown: boolean
}

type MenuBtnProps = {
    text: string,
    link?: string,
    active?: boolean
}

const MenuBtn = ({ text, link = '', active }: MenuBtnProps) => {
    return (
        <Link to={link}>
            <h2 className={active ? 'menu-btn active' : 'menu-btn inactive'}>
                {text}
            </h2>
        </Link>
    )
}

const menuArray = [
    { text: 'Home', link: '/', active: true },
    { text: 'Minha História', link: '/minha-historia' },
    { text: 'Palestras', link: '/palestras' },
    { text: 'Mentorias', link: '/mentorias' },
    { text: 'Loja', link: ''},
    { text: 'Contato', link: '/contato'}
];

const Menu = ({ isShown }: MenuProps) => {

    useGSAP(() => {
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
    }, [isShown])

    const mouseEventsStyle:React.CSSProperties = {
        pointerEvents: isShown ? 'all' : 'none'
    }

    return (
        <div style={mouseEventsStyle} className='menu-container' >
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