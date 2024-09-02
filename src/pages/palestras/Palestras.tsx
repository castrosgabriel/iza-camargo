import { useEffect } from "react";
import { PngPalestraHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import SliderPalestra from "./SliderPalestra";
import ContactCTA from "../../components/form/ContactCTA";
import { useSinglePrismicDocument } from "@prismicio/react";

const Palestras = () => {

    const [contentPalestra] = useSinglePrismicDocument('palestra')

    const renderPalestraContent = (field: string) => {
        return contentPalestra?.data[field][0].text
    }

    const palestraListArray = contentPalestra?.data.palestras.map((item: any) =>
    ({
        img: item.img.url,
        name: item.name[0].text,
        content: item.content[0].text,
        color: item.color
    })) ?? []

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='palestras' />

            <HeroInternal
                img={PngPalestraHero}
                pageName='Palestras'
                quote={renderPalestraContent('quote')}
            />
            <SliderPalestra itemsArray={palestraListArray} />
            <ContactCTA
                text={renderPalestraContent('contact_text')}
            />
            <Footer />
        </>
    );
}

export default Palestras;