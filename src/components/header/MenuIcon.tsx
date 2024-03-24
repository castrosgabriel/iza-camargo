import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type menuIconProps = {
    menuIsShown: boolean
    toggleMenu: () => void
    strokeColor?: string
}

const MenuIcon = ({ strokeColor = 'white', menuIsShown, toggleMenu }: menuIconProps) => {

    const mouseLeaveAnimationTl = gsap.timeline({ paused: true })
    mouseLeaveAnimationTl.to('#Path', {
        duration: .3,
        attr: { d: 'M6 9.37671H30' },
        ease: 'power1.inOut',
        y: 0,
        rotate: 0,
    })
        .to('#Path_2', {
            duration: .3,
            attr: { d: 'M15 18.3767H30' },
            ease: 'power1.inOut',
            opacity: 1,
        }, 0)
        .to('#Path_3', {
            duration: .3,
            attr: { d: 'M9 27.3767H30' },
            ease: 'power1.inOut',
            y: 0,
            rotate: 0,
            x: 0,
        }, 0)

    const mouseEnterAnimationTl = gsap.timeline({ paused: true })
    mouseEnterAnimationTl.to('#Path', {
        duration: .3,
        attr: { d: 'M17 9.37671H30' },
        ease: 'power1.inOut',

    }, 0)
        .to('#Path_2', {
            duration: .3,
            attr: { d: 'M8 18.3767H30' },
            ease: 'power1.inOut',
            opacity: 1,
        }, 0)
        .to('#Path_3', {
            duration: .3,
            attr: { d: 'M14 27.3767H30' },
            ease: 'power1.inOut',
        }, 0)

    useGSAP(() => {
        const exitAnimationTl = gsap.timeline({ paused: true })
        exitAnimationTl.to('#Path', {
            duration: .3,
            ease: 'power1.inOut',
            attr: { d: 'M6 9.37671H30' },
            rotate: 45,
            y: 7,
        })
            .to('#Path_3', {
                duration: .3,
                ease: 'power1.inOut',
                attr: { d: 'M6 27.3767H30' },
                rotate: -45,
                y: -8,
                x: 1,
            }, 0)
            .to('#Path_2', {
                duration: .3,
                ease: 'power1.inOut',
                attr: { d: 'M20 18.3767H30' },
                opacity: 0,
            }, 0)

        menuIsShown && exitAnimationTl.play()
        !menuIsShown && mouseLeaveAnimationTl.play()

    }, [menuIsShown])

    const handleMouseEnter = () => {
        if (menuIsShown) { return }
        mouseEnterAnimationTl.play()
    }

    const handleMouseLeave = () => {
        if (menuIsShown) { return }
        mouseLeaveAnimationTl.play()
    }

    return (
        <svg style={{ cursor: 'pointer' }} onMouseEnter={handleMouseEnter} onClick={toggleMenu} onMouseLeave={handleMouseLeave}
            width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Path" d="M6 9.37671H30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Path_2" d="M15 18.3767H30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Path_3" d="M9 27.3767H30" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
}
export default MenuIcon;