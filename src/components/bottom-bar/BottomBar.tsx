import './BottomBar.css';
import { SvgInstagram, SvgYoutube, SvgSpotify, SvgWhats, SvgLinkedin } from '../../assets/svg';
import { forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

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
        <Link to='https://www.instagram.com/izabellacamargoreal'><img src={SvgInstagram} alt='instagram' /></Link>
        <Link to='https://www.youtube.com/izabellacamargoreal'><img src={SvgYoutube} alt='youtube' /></Link>
        <Link to='https://podcasters.spotify.com/pod/show/izabella-camargo3'><img src={SvgSpotify} alt='spotify' /></Link>
        <Link to='https://wa.me/5511974987070'><img src={SvgWhats} alt='whats' /></Link>
        <Link to='https://www.linkedin.com/in/izabellacamargoreal'><img src={SvgLinkedin} alt='linkedin' /></Link>
    </div>

type BottomBarProps = {
    internal?: boolean;
    pageName?: string;
    quote?: string;
}

const BottomBar = forwardRef<HTMLDivElement, BottomBarProps>(({ internal = false, pageName, quote }, ref) => {

    useGSAP(() => {
        gsap.from('.bottom-container', {
            y: '+=100%',
            duration: 1,
            delay: .2,
            ease: 'expo.inOut',
        })
        gsap.from('.big-number', {
            y: '+=150%',
            duration: 1,
            delay: .4,
            ease: 'expo.inOut',
            stagger: .1,
            opacity: 0,
        })
        gsap.from('.spacer-bar', {
            scaleY: 0,
            duration: 1,
            delay: .5,
            ease: 'expo.inOut',
            stagger: .15,
        })

        const mm = gsap.matchMedia();
        mm.add('screen and (min-width: 768px)', () => {
            gsap.from('.social-container img', {
                y: '+=100%',
                duration: 1,
                delay: .5,
                ease: 'expo.inOut',
                stagger: .1,
                opacity: 0,
            })
        })
        mm.add('screen and (max-width: 768px)', () => {
            gsap.from('.social-container img', {
                y: '+=100%',
                duration: 1,
                delay: 0,
                ease: 'expo.inOut',
                stagger: .1,
                opacity: 0,
            })
        })

        gsap.from('.title-page-bar', {
            y: '+=100%',
            opacity: 0,
            duration: 1,
            delay: .6,
            ease: 'expo.inOut',
        })
        gsap.from('.quote-page-bar', {
            y: '+=100%',
            opacity: 0,
            duration: 1,
            delay: .7,
            ease: 'expo.inOut',
        })
    }, [])

    return (
        <div className='bottom-container' ref={ref}>
            <div className="bottom-bar">
                <Spacer />
                {internal ?
                    <>
                        <div className='title-page-bar'>{pageName}</div>
                        <Spacer />
                        <div className='quote-page-bar'>{`"${quote}"`}</div>
                    </> :
                    <>
                        <BigNumber number="10k" description="lorem ipsum" />
                        <Spacer />
                        <BigNumber number="1M" description="lorem ipsum" />
                        <Spacer />
                        <BigNumber number="120" description="lorem ipsum" />
                        <Spacer />
                        <BigNumber number="5k" description="lorem ipsum" />
                    </>
                }

                <Spacer />
                <SocialMedia />
                <Spacer />
            </div>
        </div>
    )
});

export default BottomBar;