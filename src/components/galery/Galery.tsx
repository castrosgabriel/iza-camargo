import React, { useRef, useState } from 'react';
import './Galery.css'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

type GaleryProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    titleColor?: string;
    title?: string;
    height?: string;
    gap?: number;
}

type ArrowGaleryProps = {
    fill?: string;
    rotate?: boolean;
    onClick?: () => void;
}
const ArrowGalery = ({ fill, rotate, onClick }: ArrowGaleryProps) => {
    return (
        <div className='arrow-galery' style={{ alignSelf: 'center', cursor: 'pointer', zIndex: 9999 }} onClick={onClick}>
            <svg style={{ rotate: rotate ? '180deg' : '0' }} xmlns="http://www.w3.org/2000/svg" width="69" height="29" viewBox="0 0 69 29" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M68.5151 15.7886L55.7872 28.5165C55.2014 29.1023 54.2517 29.1023 53.6659 28.5165C53.0801 27.9307 53.0801 26.981 53.6659 26.3952L64.105 15.9561L2 15.9561C1.17157 15.9561 0.5 15.2845 0.5 14.4561C0.5 13.6277 1.17157 12.9561 2 12.9561L63.5613 12.9561L53.6659 3.06069C53.0801 2.4749 53.0801 1.52516 53.6659 0.939371C54.2517 0.353584 55.2014 0.353583 55.7872 0.939371L68.5151 13.6673C69.1009 14.2531 69.1009 15.2028 68.5151 15.7886Z"
                    fill={fill} />
            </svg>
        </div>
    )
}

const Galery = ({
    children,
    height = '100vh',
    title = 'Galeria',
    backgroundColor = 'var(--c-support)',
    gap = 2,
    titleColor = 'var(--c-white)' }: GaleryProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const galeryRef = useRef<(HTMLDivElement | null)[]>([]);
    const galeryLength = React.Children.count(children);
    const container = useRef<HTMLDivElement>(null);

    const goTo = (index: number) => {
        const element = galeryRef.current[index];
        if (element) {
            gsap.to(container.current, {
                scrollTo: {
                    x: element,
                },
                duration: 1,
                ease: 'expo.inOut'
            });
        }
    };
    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % galeryLength;
        setCurrentIndex(nextIndex)
        goTo(nextIndex);
    }
    const goToPrevious = () => {
        let prevIndex = (currentIndex - 1 + galeryLength) % galeryLength;
        setCurrentIndex(prevIndex);
        goTo(prevIndex);
    }


    return (
        <div style={{ height: height, backgroundColor: backgroundColor }} className='galery-container snap-item' >
            <h2 style={{ color: titleColor }}>
                {title}
            </h2>
            <div className='galery'>
                <ArrowGalery onClick={goToPrevious} rotate fill={titleColor} />
                <div className='galery-frame' ref={container}>
                    <div style={{ gap: `${gap}rem` }} className='galery-row'>
                        {React.Children.map(children, (child, index) => {
                            return (
                                <div className='galery-item' ref={el => galeryRef.current[index] = el} key={index}>
                                    {child}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ArrowGalery onClick={goToNext} fill={titleColor} />
            </div>
        </div>
    );
}

export default Galery;
export { ArrowGalery };