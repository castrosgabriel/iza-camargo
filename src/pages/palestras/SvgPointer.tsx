import './Palestras.css';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

type SvgProps = {
    fill?: string;
}

const SvgBlob = ({ fill = 'var(--c-primary)' }: SvgProps) => {
    const blobRef = useRef<SVGSVGElement | null>(null);

    useLayoutEffect(() => {
        if (blobRef.current) {
            gsap.to(blobRef.current.querySelector('.blob-slider path'), {
                duration: 1,
                fill: fill,
            });
        }
    }, [fill]);

    return (
        <svg ref={blobRef} className='blob-slider' width="461" height="413" viewBox="0 0 461 413" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M455.333 53.9864C486.782 191.206 360.338 384.503 254.23 408.822C148.122 433.14 36.6104 341.616 5.16152 204.397C-26.2873 67.1774 103.433 134.637 209.541 110.319C315.649 86 423.884 -83.2329 455.333 53.9864Z" fill={fill} />
        </svg>
    )
}

const SvgPointer = ({ fill = 'var(--c-primary)' }: SvgProps) => {

    const pointerRef = useRef<SVGSVGElement | null>(null);

    useLayoutEffect(() => {
        if (pointerRef.current) {
            const tl = gsap.timeline()
            tl.to(pointerRef.current.querySelector('#pointer-first'), {
                attr: {
                    fill: fill,
                },
                duration: 1,
            })
                .to(pointerRef.current.querySelector('#color-gradient'), {
                    attr: {
                        stopColor: fill,
                    },
                    duration: 1,
                }, 0)
        }

    }, [fill]);

    return (
        <svg ref={pointerRef} className='pointer-slider' width="440" height="66" viewBox="0 0 440 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id='pointer-first' d="M219.5 0L230.325 18.75H208.675L219.5 0Z" fill={fill} />
            <path id='pointer-second' d="M219.5 0L230.325 18.75H208.675L219.5 0Z" fill={fill} />
            <path d="M1 65C117.037 1.40497 340.94 5.97081 439 65" stroke="url(#paint0_radial_2255_527)" strokeWidth="2" />
            <defs>
                <radialGradient id="paint0_radial_2255_527" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220.327 19.0159) scale(222.922 23.4119)">
                    <stop id='color-gradient' stopColor={fill} />
                    <stop offset="1" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export { SvgBlob, SvgPointer };