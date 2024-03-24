import { useRef, useState } from 'react';
import { PngTvContent } from '../../assets/png';
import { SvgArrowSlider } from '../../assets/svg';
import './CarouselTv.css';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

type PaginatorProps = {
    length: number,
    indexActive: number
}


const carouselArray = [
    {
        id: 1,
        img: PngTvContent
    },
    {
        id: 2,
        img: PngTvContent
    },
    {
        id: 3,
        img: PngTvContent
    }
]

const Paginator = ({ length, indexActive }: PaginatorProps) => {

    type PaginatorItemProps = {
        active: boolean
    }

    const PaginatorItem = ({ active }: PaginatorItemProps) => {
        return (
            <>
                <div className={`paginator-item ${active && 'active'}`} />
            </>
        )
    }

    return (
        <div className='paginator'>
            {
                Array.from({ length }).map((_, index) => {
                    return <PaginatorItem key={index} active={index === indexActive} />
                })
            }
        </div>
    )
}

const CarouselTv = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<(HTMLDivElement | null)[]>([]);
    const carouselLength = carouselArray.length;

    const goTo = (index: number) => {
        const element = carouselRef.current[index];
        if (element) {
            gsap.to('.container-carousel', {
                scrollTo: {
                    y: element,
                },
                duration: 1,
                ease: 'expo.inOut'
            });
        }
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % carouselLength;
        setCurrentIndex(nextIndex)
        goTo(nextIndex);
    }


    const goToPrevious = () => {
        let prevIndex = (currentIndex - 1 + carouselLength) % carouselLength;
        setCurrentIndex(prevIndex);
        goTo(prevIndex);
    }


    return (
        <div className='carousel'>
            <div className='side-options'>
                <img src={SvgArrowSlider} onClick={goToPrevious} />
                <Paginator length={carouselLength} indexActive={currentIndex} />
                <img style={{ transform: 'rotate(180deg)' }} src={SvgArrowSlider} onClick={goToNext} />
            </div>
            <div className='container-carousel'>
                <div className='corousel-wrapper'>
                    {carouselArray.map((item, index) => {
                        return (
                            <div ref={el => carouselRef.current[index] = el} key={item.id} className='carousel-item'>
                                <img src={item.img} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CarouselTv;