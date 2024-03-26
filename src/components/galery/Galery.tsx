import { useRef, useState } from 'react';
import { PngGalery1, PngGalery2, PngGalery3, PngGalery4 } from '../../assets/png';
import { SvgArrowGalery } from '../../assets/svg';
import './Galery.css'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Galery = () => {

    const imgArrey = [
        { src: PngGalery1 },
        { src: PngGalery2 },
        { src: PngGalery3 },
        { src: PngGalery4 },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const galeryRef = useRef<(HTMLDivElement | null)[]>([]);
    const galeryLength = imgArrey.length;


    const goTo = (index: number) => {
        const element = galeryRef.current[index];
        if (element) {
            gsap.to('.galery-frame', {
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

    console.log(currentIndex, galeryRef.current)

    return (
        <div className='galery-container'>
            <h2>Galeria</h2>
            <div className='galery'>
                <img onClick={goToPrevious} style={{ rotate: '180deg' }} src={SvgArrowGalery} alt='arrow' />
                <div className='galery-frame'>
                    <div className='galery-row'>
                        {imgArrey.map((img, index) => {
                            return (
                                <div ref={el => galeryRef.current[index] = el} key={index}>
                                    <img src={img.src} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img onClick={goToNext} src={SvgArrowGalery} alt='arrow' />
            </div>
        </div>
    );
}

export default Galery;