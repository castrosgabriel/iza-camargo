import './Header.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import MenuIcon from './MenuIcon';
import gsap from 'gsap';
import LogoHorizontal from './LogoHorizontal';

type headerProps = {
    menuIsShown: boolean
    toggleMenu: () => void
    hasDarkBg?: boolean
}

const Header = ({ menuIsShown, hasDarkBg = true, toggleMenu }: headerProps) => {

    const [contentColor, setContentColor] = useState('var(--c-white)')

    useLayoutEffect(() => {
        gsap.from('.header', {
            y: '-=100%',
            duration: 1.5,
            delay: .1,
            ease: 'expo.inOut',
        })
        return () => {
            gsap.killTweensOf('.header')
        }
    }, [])

    useEffect(() => {
        if (!hasDarkBg) {
            setContentColor('var(--c-dark)')
        }
    })


    return (
        <div className='header-container'>
            <header className="header">
                <LogoHorizontal strokeColor={contentColor} />
                <MenuIcon strokeColor={contentColor} menuIsShown={menuIsShown} toggleMenu={toggleMenu} />
            </header>
        </div>
    );
}

export default Header;