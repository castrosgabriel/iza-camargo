import { useGSAP } from '@gsap/react';
import './Palestra.css';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { ArrowGalery } from '../galery/Galery';
import { SvgBlob, SvgPointer } from './SvgPointer';

type SliderPalestraProps = {
    itemsArray: Array<{
        img: string,
        name: string,
        content: string,
        color?: string
    }>
}

const SliderPalestra = ({ itemsArray }: SliderPalestraProps) => {

    const imgRefs = useRef<Array<HTMLDivElement | null>>([]);
    const txtRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [currentSlide, setCurrentSlide] = useState(0)
    const current = itemsArray[currentSlide];
    const currentColor = current?.color;

    const animateTriangle = (reverse?: boolean) => {
        const triangleFirst = '#pointer-first';
        const triangleSecond = '#pointer-second';
        const sliderItem = document.querySelector('.slider-item');
        const sliderItemWidth = sliderItem ? sliderItem.clientWidth : 0;
        const tl = gsap.timeline()
        const reverseValue = reverse ? -1 : 1;

        gsap.set(triangleFirst, {
            x: (-sliderItemWidth / 2) * reverseValue,
            rotate: -20 * reverseValue,
            y: '100%',
            opacity: 0,
        })

        tl.from(triangleFirst, {
            duration: 1,
            x: 0,
            y: 0,
            rotate: 0,
        })
            .from(triangleFirst, {
                opacity: 1,
                duration: .4,
            }, 0)
            .from(triangleSecond, {
                duration: 1,
                x: (sliderItemWidth / 2) * reverseValue,
                rotate: 20 * reverseValue,
                y: '100%',
            }, 0)
            .from(triangleSecond, {
                opacity: 0,
                duration: .5,
            }, .5)
    }

    const animateSlide = (reverse?: boolean) => {
        const reverseValue = reverse ? -1 : 1;
        gsap.to('.slider-content', {
            x: `-=${(100 / itemsArray.length) * reverseValue}%`,
            duration: 1,
        })
    }

        const handleNextSlide = () => {
            if (currentSlide < itemsArray.length - 1) {
                setCurrentSlide(currentSlide + 1)
                animateTriangle()
                animateSlide()
            } else {
                setCurrentSlide(0)
                gsap.to('.slider-content', {
                    x: 0,
                    duration: 1,
                })
            }
        }

        const handlePrevSlide = () => {
            if (currentSlide > 0) {
                setCurrentSlide(currentSlide - 1)
                animateTriangle(true)
                animateSlide(true)
            } else {
                setCurrentSlide(itemsArray.length - 1)
                gsap.to('.slider-content', {
                    x: `-${(100 / itemsArray.length) * (itemsArray.length - 1)}%`,
                    duration: 1,
                })
            }
        }

        useGSAP(() => {

            // const positionSlideSide = (after?: boolean) => {
                

            const beforeSlideTl = gsap.timeline()
            if (imgRefs.current && txtRefs.current) {
                beforeSlideTl.to(imgRefs.current.filter((_, index) => index === currentSlide - 1 || (currentSlide === 0 && index === itemsArray.length - 1)), {
                    scale: .7,
                    duration: 1,
                    x: 180,
                    filter: 'blur(5px)',
                    y: 30,
                    rotate: -20,
                })
                    .to(txtRefs.current.filter((_, index) => index === currentSlide - 1 || (currentSlide === 0 && index === itemsArray.length - 1)), {
                        opacity: 0,
                        duration: .2,
                        y: 10,
                    }, 0)

            }

            const afterSlideTl = gsap.timeline()
            if (imgRefs.current && txtRefs.current) {
                afterSlideTl.to(imgRefs.current.filter((_, index) => index === currentSlide + 1 || (currentSlide === itemsArray.length - 1 && index === 0)), {
                    scale: .7,
                    duration: 1,
                    x: -180,
                    y: 30,
                    rotate: 20,
                    filter: 'blur(5px)',
                })
                    .to(txtRefs.current.filter((_, index) => index === currentSlide + 1 || (currentSlide === itemsArray.length - 1 && index === 0)), {
                        opacity: 0,
                        duration: .2,
                        y: 10,
                    }, 0)

            }

            const activeSlideTl = gsap.timeline()
            if (imgRefs.current && txtRefs.current) {
                activeSlideTl.to(imgRefs.current[currentSlide], {
                    scale: 1,
                    duration: 1,
                    filter: 'blur(0px)',
                    x: 0,
                    y: 0,
                    rotate: 0,
                })
                    .to(txtRefs.current[currentSlide], {
                        opacity: 1,
                        duration: .5,
                        y: 0,
                    }, .5)
            }

            return [beforeSlideTl, activeSlideTl]

        }, [currentSlide])

        return (
            <div className='slider-screen'>
                <ArrowGalery onClick={handlePrevSlide} rotate fill='var(--c-dark)' />
                <div className='slider-container'>
                    <div className='slider-frame'>
                        <SvgPointer fill={currentColor} />
                        <div className='slider-content'>
                            {itemsArray.map((item, index) => (
                                <div
                                    className='slider-item' key={index}>
                                    <img ref={(element) => (imgRefs.current[index] = element)} src={item.img} />
                                    <div ref={(element) => (txtRefs.current[index] = element)} className='slider-text'>
                                        <p>PALESTRA</p>
                                        <h3>{item.name}</h3>
                                        <p>{item.content}</p>
                                        <p>
                                            <b>Conteúdo</b>
                                            <br />
                                            Segurança psicológica e atualização de identidade.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ArrowGalery onClick={handleNextSlide} fill='var(--c-dark)' />
                <SvgBlob fill={currentColor} />
            </div>
        );
    }

    export default SliderPalestra