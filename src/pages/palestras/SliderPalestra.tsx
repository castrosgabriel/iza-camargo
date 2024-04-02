import { useGSAP } from '@gsap/react';
import './Palestras.css';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ArrowGalery } from '../../components/galery/Galery';
import { SvgBlob, SvgPointer } from './SvgPointer';
import SliderDots from './SliderDots';
import { Observer } from 'gsap/Observer';

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
    const contentRef = useRef<HTMLDivElement | null>(null)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [animating, setAnimating] = useState(false)

    const current = itemsArray[currentSlide];
    const currentColor = current?.color;

    const animateTriangle = (reverse?: boolean) => {
        const sliderItem = document.querySelector('.slider-item');
        const sliderItemWidth = sliderItem ? sliderItem.clientWidth : 0;
        const reverseValue = reverse ? -1 : 1;

        gsap.set('#pointer-first', {
            x: (-sliderItemWidth / 2) * reverseValue,
            rotate: -20 * reverseValue,
            y: '90%',
            opacity: 0,
        })

        const triangleTL = gsap.timeline()
        triangleTL.from('#pointer-first', {
            duration: 1,
            x: 0,
            y: 0,
            rotate: 0,
        })
            .from('#pointer-first', {
                opacity: 1,
                duration: .25,
            }, 0)
            .from('#pointer-second', {
                duration: 1,
                x: (sliderItemWidth / 2) * reverseValue,
                rotate: 20 * reverseValue,
                y: '90%',
            }, 0)
            .from('#pointer-second', {
                opacity: 0,
                duration: .5,
            }, .5)
    }

    const animateSlide = (reverse?: boolean) => {
        const reverseValue = reverse ? -1 : 1;
        gsap.to(contentRef.current, {
            x: `-=${(100 / itemsArray.length) * reverseValue}%`,
            duration: 1,
            onComplete: () => {
                setAnimating(false)
            }
        })
    }

    const handleNextSlide = () => {
        if (animating) return
        if (currentSlide < itemsArray.length - 1) {
            setAnimating(true)
            setCurrentSlide(currentSlide + 1)
            animateTriangle()
            animateSlide()
        }
    }

    const handlePrevSlide = () => {
        if (animating) return
        if (currentSlide > 0) {
            setAnimating(true)
            setCurrentSlide(currentSlide - 1)
            animateTriangle(true)
            animateSlide(true)
        }
    }

    useEffect(() => {
        if (currentSlide === 0) {
            gsap.set(imgRefs.current.filter((_, index) => index > currentSlide), {
                scale: .7,
                x: -400,
                y: 50,
                rotate: 20,
                filter: 'blur(5px)',
                opacity: .7
            })
            gsap.set(txtRefs.current.filter((_, index) => index > currentSlide), {
                opacity: 0,
                duration: .2,
                y: 10,
            })

            gsap.set(imgRefs.current[currentSlide], {
                scale: 1,
                duration: 1,
                filter: 'blur(0px)',
                x: 0,
                y: -30,
                rotate: 0,
                opacity: 1,
            })
        }

        return () => {
            gsap.getTweensOf('.slider-item').forEach(tween => tween.kill())
        }
    }, [])

    useGSAP(() => {
        const beforeSlideTl = gsap.timeline()
        beforeSlideTl.to(imgRefs.current.filter((_, index) => index < currentSlide), {
            scale: .7,
            duration: 1,
            x: 400,
            filter: 'blur(5px)',
            y: 50,
            rotate: -20,
            opacity: .7
        })
            .to(txtRefs.current.filter((_, index) => index < currentSlide), {
                opacity: 0,
                duration: .2,
            }, 0)


        const afterSlideTl = gsap.timeline()
        afterSlideTl.to(imgRefs.current.filter((_, index) => index > currentSlide), {
            scale: .7,
            duration: 1,
            x: -400,
            y: 50,
            rotate: 20,
            filter: 'blur(5px)',
            opacity: .7

        })
            .to(txtRefs.current.filter((_, index) => index > currentSlide), {
                opacity: 0,
                duration: .2,
            }, 0)


        const activeSlideTl = gsap.timeline()
        activeSlideTl.to(imgRefs.current[currentSlide], {
            scale: 1,
            duration: 1,
            filter: 'blur(0px)',
            x: 0,
            y: -30,
            rotate: 0,
            opacity: 1,
        })
            .to(txtRefs.current[currentSlide], {
                opacity: 1,
                duration: .5,
            }, .8)

    }, [currentSlide])

    useEffect(() => {
        const observerTouch = Observer.create({
            target: '.slider-screen',
            type: 'touch',
            tolerance: 100,
            onLeft: handleNextSlide,
            onRight: handlePrevSlide,
        })
        return () => {
            observerTouch.kill()
        }

    }, [currentSlide, handleNextSlide, handlePrevSlide])

    return (
        <div className='slider-screen snap-item'>
            <SliderDots itemsArray={itemsArray} currentColor={currentColor} activeDot={currentSlide} />
            <ArrowGalery onClick={handlePrevSlide} rotate fill='var(--c-dark)' />
            <div className='slider-container'>
                <div className='slider-frame'>
                    <SvgPointer fill={currentColor} />
                    <div ref={contentRef} className='slider-content'>
                        {itemsArray.map((item, index) => (
                            <div
                                className='slider-item' key={index}>
                                <img ref={(element) => (imgRefs.current[index] = element)} src={item.img} />
                                <div ref={(element) => (txtRefs.current[index] = element)} className='slider-text'>
                                    <p>PALESTRA</p>
                                    <h2>{item.name}</h2>
                                    <p>{item.content}</p>
                                    <p className='conteudo'>
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