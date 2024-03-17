import './Hero.css';
import Header from '../header/Header';
import BottomBar from '../bottom-bar/BottomBar';
import { SvgLogo, SvgArrow } from '../../assets/svg';
import { PngHero } from '../../assets/png';

const Hero = () =>
    <>
        <div className='hero-container'>
            <Header />
            <div className='hero-content'>
                <img alt='logo' src={SvgLogo} className='hero-logo' />
                <div className='hero-title'>
                    <h1>Que bom que <br /> você está aqui.</h1>
                    <img src={SvgArrow} alt='arrow' />
                </div>
            </div>
            <BottomBar />
        </div>
        <img src={PngHero} alt='hero' className='hero-img' />
    </>

export default Hero;