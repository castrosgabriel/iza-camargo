import { useEffect, useState } from "react";
import Header from "../header/Header";
import Menu from "./Menu";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

type MenuWrapperProps = {
    whichIsActive?: string
}

gsap.registerPlugin(ScrollTrigger);

const MenuWrapper = ({ whichIsActive }: MenuWrapperProps) => {
    const [showMenu, setShowMenu] = useState(false)
    const [hasDarkBg, setHasDarkBg] = useState(true)

    useEffect(() => {
        ScrollTrigger.create({
            start: "20% top",
            end: "80%",
            onEnter: () => setHasDarkBg(false),
            onEnterBack: () => setHasDarkBg(true),
        });
        validateDarkBg()
    }, [showMenu])

    const validateDarkBg = () => {
        if (hasDarkBg) return
        if (showMenu) setTimeout(() => { setHasDarkBg(true) }, 300)
    }

    return (
        <>
            <Header hasDarkBg={hasDarkBg} menuIsShown={showMenu} toggleMenu={() => setShowMenu(!showMenu)} />
            <Menu whichIsActive={whichIsActive} isShown={showMenu} />
        </>
    )
}
export default MenuWrapper;