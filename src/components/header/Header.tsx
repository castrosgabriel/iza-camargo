import './Header.css';
import MenuIcon from './MenuIcon';
import gsap from 'gsap';
import LogoHorizontal from './LogoHorizontal';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

type headerProps = {
    menuIsShown: boolean
    toggleMenu: () => void
    hasDarkBg?: boolean
}

gsap.registerPlugin(ScrollToPlugin)

const Header = ({ menuIsShown, hasDarkBg = true, toggleMenu }: headerProps) => {

    useGSAP(() => {
        gsap.from('.header', {
            y: '-=100%',
            duration: 1,
            delay: .1,
            ease: 'expo.inOut',
        })
    }, [])

    const goToTop = () => {
        gsap.to(window, {
            duration: 1.8,
            scrollTo: { y: 0, autoKill: false },
            ease: 'power2.inOut',
        })
    }


    return (
        <div className='header-container'>
            <header className="header">
                <Link onClick={goToTop} to='/' className='logo-link'>
                    <LogoHorizontal onlyLogo={!hasDarkBg}/>
                </Link>
                <MenuIcon contrastBackground={!hasDarkBg} menuIsShown={menuIsShown} toggleMenu={toggleMenu} />
            </header>
            <div className='background-header' />
        </div>
    );
}

export default Header;