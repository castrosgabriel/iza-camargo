import { PngContactHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import FormSection from "../../components/form/FormSection";
import { useEffect } from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import Modal from "../../components/modal/Modal";

const Contato = () => {
    const [contactContent] = useSinglePrismicDocument('contato')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const renderContactContent = (field: string) => {
        return contactContent?.data[field][0].text
    }

    const contactListArray = contactContent?.data.contact_list.map((item: any) => {
        return {
            function: item.function[0].text,
            name: item.name[0].text,
            phone: item.phone[0].text,
            email: item.email[0]?.text
        }
    }) ?? []

    return (
        <>
            <Modal  />
            <MenuWrapper whichIsActive='contato' />
            <HeroInternal
                img={PngContactHero}
                pageName='Contato'
                quote={renderContactContent('quote')}
            />
            <FormSection
                title={renderContactContent('main_title')}
                text={renderContactContent('main_subtitle')}
                contactList={contactListArray}
            />
            <Footer />
        </>
    )
}
export default Contato;