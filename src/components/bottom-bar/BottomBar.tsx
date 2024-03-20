import './BottomBar.css';
import { SvgInstagram, SvgYoutube, SvgSpotify, SvgWhats, SvgLinkedin } from '../../assets/svg';
import { forwardRef, useLayoutEffect } from 'react';
import gsap from 'gsap';


type BigNumberProps = {
    number: string;
    description: string;
}

const Spacer = () =>
    <svg className='spacer-bar' width="1" height="107" viewBox="0 0 1 107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.390762" y1="1.24306e-08" x2="0.390756" y2="107" stroke="white" strokeWidth="0.781525" />
    </svg>

const BigNumber = ({ number, description }: BigNumberProps) => {
    return (
        <div className="big-number">
            <div className='number'>{number}</div>
            <div className='description'>{description}</div>
        </div>
    )
}


export const SocialMedia = () =>
    <div className='social-container'>
        <img src={SvgInstagram} alt='instagram' />
        <img src={SvgYoutube} alt='youtube' />
        <img src={SvgSpotify} alt='spotify' />
        <img src={SvgWhats} alt='whats' />
        <img src={SvgLinkedin} alt='linkedin' />
    </div>

const BottomBar = forwardRef<HTMLDivElement>((props, ref) => {

    useLayoutEffect(() => {
        gsap.from('.bottom-container', {
            y: '+=100%',
            duration: 1.5,
            delay: .2,
            ease: 'expo.inOut',
        })
        gsap.from('.big-number', {
            y: '+=150%',
            duration: 1.5,
            delay: .4,
            ease: 'expo.inOut',
            stagger: .1,
            opacity: 0,
        })
        gsap.from('.spacer-bar', {
            scaleY: 0,
            duration: 1.5,
            delay: .5,
            ease: 'expo.inOut',
            stagger: .15,
        })
        gsap.from('.social-container img', {
            y: '+=100%',
            duration: 1.5,
            delay: .5,
            ease: 'expo.inOut',
            stagger: .1,
            opacity: 0,
        })

        return () => {
            gsap.killTweensOf('.bottom-container')
            gsap.killTweensOf('.big-number')
            gsap.killTweensOf('.spacer-bar')
            gsap.killTweensOf('.social-container img')
        }
    }, [])

    return (
        <div className='bottom-container' ref={ref}>
            <div className="bottom-bar">
                <Spacer />
                <BigNumber number="10k" description="lorem ipsum" />
                <Spacer />
                <BigNumber number="1M" description="lorem ipsum" />
                <Spacer />
                <BigNumber number="120" description="lorem ipsum" />
                <Spacer />
                <BigNumber number="5k" description="lorem ipsum" />
                <Spacer />
                <SocialMedia />
                <Spacer />
            </div>
        </div>
    )
});

export default BottomBar;