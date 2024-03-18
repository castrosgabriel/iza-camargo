import './Header.css';
import { SvgLogoHor, SvgMenu } from '../../assets/svg';
import { forwardRef } from 'react';

const Header = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <header ref={ref} className="header">
            <img src={SvgLogoHor} alt='logo'/>
            <img src={SvgMenu} alt='menu' />
        </header>
    );
})

export default Header;