import './Header.css';
import { SvgLogoHor, SvgMenu } from '../../assets/svg';

const Header = () => {
    return (
        <header className="header">
            <img src={SvgLogoHor} alt='logo'/>
            <img src={SvgMenu} alt='menu' />
        </header>
    );
}

export default Header;