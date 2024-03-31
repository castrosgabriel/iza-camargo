import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type SliderDotsProps = {
    activeDot: number,
    currentColor?: string,
    itemsArray: Array<any>
}

const SliderDots = ({ activeDot, currentColor, itemsArray }: SliderDotsProps) => {

    useEffect(() => {
        const tl = gsap.timeline();

        dotRefs.current.forEach((dotRef, index) => {
            if (activeDot === index) {
                tl.to(dotRef, {
                    width: '2rem',
                    duration: 0.5,
                    backgroundColor: currentColor,
                });
            }
            else {
                tl.to(dotRef, {
                    width: '0.75rem',
                    duration: 0.5,
                    backgroundColor: '#9F9F9F',
                }, 0);
            }
        });

        return () => { tl.kill(); }
    }, [activeDot]);

    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

    return (
        <div className='slider-dots'>
            {itemsArray.map((_, index) => (
                <div
                    ref={(ref) => dotRefs.current[index] = ref}
                    key={index} className='dot'></div>
            ))}
        </div>
    )
}

export default SliderDots;