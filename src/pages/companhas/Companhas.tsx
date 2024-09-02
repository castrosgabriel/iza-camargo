import HeroInternal from "../../components/hero/HeroInternal";
import { PngCampanhaHero, PngIzaCampanha, PngIzaCampanhasMobile } from "../../assets/png";
import ContactCTA from "../../components/form/ContactCTA";
import Footer from "../../components/footer/Footer";
import MenuWrapper from "../../components/menu/MenuWrapper";
import { useEffect } from "react";
import InternalFrame from "../mestre/InternalFrame";
import { useSinglePrismicDocument } from "@prismicio/react";

const Campanhas = () => {
    const [campanhaContent] = useSinglePrismicDocument('campanhas')
    const renderCampanhaContent = (field: string) => {
        return campanhaContent?.data[field][0].text
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='campanhas' />
            <HeroInternal
                pageName='Campanhas e Ações'
                mobileImg={PngIzaCampanhasMobile}
                img={PngCampanhaHero}
                quote={renderCampanhaContent("quote")}
            />
            <InternalFrame
                title={renderCampanhaContent("main_title")}
                txt={renderCampanhaContent("main_text")}
                img={PngIzaCampanha}
                colors={['#FDC286', '#F5859F', '#F6E78F']}
            />
            <ContactCTA
                text={renderCampanhaContent("contact_text")}
            />
            <Footer />
        </>
    )
}

export default Campanhas;