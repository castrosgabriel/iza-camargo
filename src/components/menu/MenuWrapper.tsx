import { useState } from "react";
import Header from "../header/Header";
import Menu from "./Menu";

type MenuWrapperProps = {
    whichIsActive?: string
    darkBg?: boolean
}

const MenuWrapper = ({whichIsActive, darkBg}:MenuWrapperProps) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <Header hasDarkBg={darkBg} menuIsShown={showMenu} toggleMenu={() => setShowMenu(!showMenu)} />
            <Menu whichIsActive={whichIsActive} isShown={showMenu} />
        </>
    )
}
export default MenuWrapper;