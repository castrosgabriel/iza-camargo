import { useState } from "react";
import Header from "../header/Header";
import Menu from "./Menu";

type MenuWrapperProps = {
    whichIsActive?: string
}

const MenuWrapper = ({whichIsActive}:MenuWrapperProps) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <Header menuIsShown={showMenu} toggleMenu={() => setShowMenu(!showMenu)} />
            <Menu whichIsActive={whichIsActive} isShown={showMenu} />
        </>
    )
}
export default MenuWrapper;