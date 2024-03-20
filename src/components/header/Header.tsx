import './Header.css';
import { SvgLogoHor } from '../../assets/svg';
import { useLayoutEffect } from 'react';
import MenuIcon from './MenuIcon';
import gsap from 'gsap';

type headerProps = {
    toggleMenu: () => void
}

const Header = ({toggleMenu}:headerProps) => {

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


    return (
        <div className='header-container'>
            <header className="header">
                <img src={SvgLogoHor} alt='logo' />
                <MenuIcon toggleMenu={toggleMenu} />
            </header>
        </div>
    );
}

export default Header;