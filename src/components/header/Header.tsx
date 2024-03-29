import './Header.css';
import { useEffect, useState } from 'react';
import MenuIcon from './MenuIcon';
import gsap from 'gsap';
import LogoHorizontal from './LogoHorizontal';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

type headerProps = {
    menuIsShown: boolean
    toggleMenu: () => void
    hasDarkBg?: boolean
}

const Header = ({ menuIsShown, hasDarkBg = true, toggleMenu }: headerProps) => {

    const [contentColor, setContentColor] = useState('var(--c-white)')

    useGSAP(() => {
        gsap.from('.header', {
            y: '-=100%',
            duration: 1,
            delay: .1,
            ease: 'expo.inOut',
        })
    }, [])

    useEffect(() => {
        if (!hasDarkBg) {
            setContentColor('var(--c-dark)')
        }
    })


    return (
        <div className='header-container'>
            <header className="header">
                <Link to='/' className='logo-link'>
                    <LogoHorizontal strokeColor={contentColor} />
                </Link>
                <MenuIcon strokeColor={contentColor} menuIsShown={menuIsShown} toggleMenu={toggleMenu} />
            </header>
            <div className='background-header' />
        </div>
    );
}

export default Header;