import { useEffect } from "react";
import { PngIzaMestre, PngIzaMestreMobile, PngMestreHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import ContactCTA from "../../components/form/ContactCTA";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import './Mestre.css';
import InternalFrame from "./InternalFrame";
import { useSinglePrismicDocument } from "@prismicio/react";

const Mestre = () => {

    const [mestreContent] = useSinglePrismicDocument('mestre')
    const renderMestreContent = (field: string) => {
        return mestreContent?.data[field][0].text
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='mestre' />
            <HeroInternal
                pageName='Mestre de Cerimonia'
                mobileImg={PngIzaMestreMobile}
                quote={renderMestreContent("quote")}
                img={PngMestreHero}
            />
            <InternalFrame
                title={renderMestreContent("main_title")}
                txt={renderMestreContent("main_text")}
                img={PngIzaMestre}
            />
            <ContactCTA
                text={renderMestreContent("contact_text")}
            />
            <Footer />
        </>
    )
}

export default Mestre;