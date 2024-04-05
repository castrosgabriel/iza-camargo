import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CSSProperties, useRef, useState } from "react";

type menuIconProps = {
    menuIsShown: boolean
    toggleMenu: () => void
    strokeColor?: string
    contrastBackground?: boolean
}

const MenuIcon = ({ contrastBackground, strokeColor = 'white', menuIsShown, toggleMenu }: menuIconProps) => {

    const [hovered, setHovered] = useState(false)

    const path1Ref = useRef<SVGPathElement>(null)
    const path2Ref = useRef<SVGPathElement>(null)
    const path3Ref = useRef<SVGPathElement>(null)

    useGSAP(() => {
        if (menuIsShown) return
        if (hovered) {
            const mouseEnterAnimationTl = gsap.timeline()
            mouseEnterAnimationTl.to(path1Ref.current, {
                duration: .3,
                attr: { d: 'M17 9.37671H30' },
                ease: 'power1.inOut',
            }, 0)
                .to(path2Ref.current, {
                    duration: .3,
                    attr: { d: 'M8 18.3767H30' },
                    ease: 'power1.inOut',
                    opacity: 1,
                }, 0)
                .to(path3Ref.current, {
                    duration: .3,
                    attr: { d: 'M14 27.3767H30' },
                    ease: 'power1.inOut',
                }, 0)

        } else {
            const mouseLeaveAnimationTl = gsap.timeline()
            mouseLeaveAnimationTl.to(path1Ref.current, {
                duration: .3,
                attr: { d: 'M6 9.37671H30' },
                ease: 'power1.inOut',
                y: 0,
                rotate: 0,
            })
                .to(path2Ref.current, {
                    duration: .3,
                    attr: { d: 'M15 18.3767H30' },
                    ease: 'power1.inOut',
                    opacity: 1,
                }, 0)
                .to(path3Ref.current, {
                    duration: .3,
                    attr: { d: 'M9 27.3767H30' },
                    ease: 'power1.inOut',
                    y: 0,
                    rotate: 0,
                    x: 0,
                }, 0)
        }

    }, [hovered, menuIsShown])

    useGSAP(() => {
        if (menuIsShown) {
            const exitAnimationTl = gsap.timeline()
            exitAnimationTl.to(path1Ref.current, {
                duration: .3,
                ease: 'power1.inOut',
                attr: { d: 'M6 9.37671H30' },
                rotate: 45,
                y: 2,
            })
                .to(path3Ref.current, {
                    duration: .3,
                    ease: 'power1.inOut',
                    attr: { d: 'M6 27.3767H30' },
                    rotate: -45,
                    y: -2,
                    x: -1
                }, 0)
                .to(path2Ref.current, {
                    duration: .3,
                    ease: 'power1.inOut',
                    attr: { d: 'M20 18.3767H30' },
                    opacity: 0,
                }, 0)
        } else {
            setHovered(false)
        }
    }, [menuIsShown])

    const svgStyle: CSSProperties = {
        background: contrastBackground ? '#2b38368b' : 'transparent',
        padding: '.75rem',
        borderRadius: '50%',
        cursor: 'pointer',
        backdropFilter: contrastBackground ? 'blur(3px)' : 'none',
    }

    return (
        <svg style={svgStyle} onMouseEnter={() => setHovered(true)} onClick={toggleMenu} onMouseLeave={() => setHovered(false)}
            width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path ref={path1Ref} id="Path" d="M6 9.37671H30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path ref={path2Ref} id="Path_2" d="M15 18.3767H30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path ref={path3Ref} id="Path_3" d="M9 27.3767H30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
}
export default MenuIcon;