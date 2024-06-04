import { SocialMedia } from '../bottom-bar/BottomBar';
import gsap from 'gsap';
import './Menu.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

type MenuProps = {
    isShown: boolean
    whichIsActive?: string
    btnClick?: () => void
}

type MenuBtnProps = {
    text: string,
    link?: string,
    isActive?: boolean
    onClick?: () => void
}

const MenuBtn = ({ text, link = '', isActive, onClick }: MenuBtnProps) => {


    return (
        <Link to={link} onClick={onClick}>
            <h2
                className={isActive ? 'menu-btn active' : 'menu-btn inactive'}
            >
                {text}
            </h2>
        </Link>
    )
}

const Menu = ({ isShown, whichIsActive, btnClick }: MenuProps) => {

    const menuArray = [
        { text: 'Home', link: '/', id: 'home' },
        { text: 'Sobre mim', link: '/minha-historia', id: 'minha-historia' },
        { text: 'Palestras', link: '/palestras', id: 'palestras' },
        { text: 'Letramento', link: '/mentorias', id: 'mentorias' },
        { text: 'Mestre de Cerimonia', link: '/mestre', id: 'mestre'},
        { text: 'Campanhas e Ações', link: '/campanhas', id: 'campanhas'},
        { text: 'Loja', link: 'https://byizabellacamargo2.lojavirtualnuvem.com.br', id: 'loja' },
        { text: 'Contato', link: '/contato', id: 'contato' },
    ];

    useEffect(() => {
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
                duration: 0,
                x: 100,
                opacity: 0,
                stagger: 0.1,
                ease: 'circ.inOut'
            })
        }
    }, [isShown])

    const mouseEventsStyle: React.CSSProperties = {
        pointerEvents: isShown ? 'all' : 'none'
    }

    return (
        <div style={mouseEventsStyle} className='menu-container' >
            <div className='menu-wrapper'>
                <div className='menu-content'>
                    {menuArray.map((item, index) =>
                        <MenuBtn
                            onClick={btnClick}
                            key={index}
                            isActive={item.id === whichIsActive}
                            link={item.link}
                            text={item.text}
                        />)}
                </div>
                <div className='social-media-wrapper'>
                    <SocialMedia />
                </div>
            </div>
        </div >
    );
}

export default Menu;