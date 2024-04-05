import { useRef, useState } from 'react';
import { PngTv1, PngTv2, PngTv3 } from '../../assets/png';
import { SvgArrowSlider } from '../../assets/svg';
import './CarouselTv.css';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

type PaginatorProps = {
    length: number,
    indexActive: number
}


const carouselArray = [
    {
        id: 1,
        img: PngTv1,
        link: 'https://www.youtube.com/watch?v=UJeSe18J1m0&ab_channel=TEDxTalks'
    },
    {
        id: 2,
        img: PngTv2,
        link: 'https://www.youtube.com/watch?v=ZucqBl_CFvo&ab_channel=TEDxTalks'
    },
    {
        id: 3,
        img: PngTv3,
        link: 'https://www.youtube.com/watch?v=58GGgSsNOKU&ab_channel=TEDxTalks'
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
                <img src={SvgArrowSlider} onClick={goToNext} />
            </div>
            <div className='container-carousel'>
                <div className='corousel-wrapper'>
                    {carouselArray.map((item, index) => {
                        return (
                            <Link to={item.link} target='_blank' key={item.id}>
                                <div ref={el => carouselRef.current[index] = el} key={item.id} className='carousel-item'>
                                    <img src={item.img} />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CarouselTv;