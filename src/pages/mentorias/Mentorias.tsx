import { PngIzaLetramento, PngMentoriaHero } from "../../assets/png";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import ContactCTA from "../../components/form/ContactCTA";
import Donut from "../../components/Donut";
import './Mentorias.css';
import { useSinglePrismicDocument } from "@prismicio/react";
import Modal from "../../components/modal/Modal";

type ItemProps = {
    number: string;
    text: string;
}

const Item = ({ number, text }: ItemProps) => {
    return (
        <div className='mentoria-item'>
            <h1>{number}</h1>
            <p>{text}</p>
        </div>
    );
}

const Mentorias = () => {

    const [letramentoContent] = useSinglePrismicDocument('letramento')
    const renderContentLetramento = (field: string) => {
        return letramentoContent?.data[field][0].text
    }

    const mentoriaList = letramentoContent?.data.items.map((item: any) => ({
        number: item.number[0].text,
        text: item.text[0].text
    }))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Modal />
            <MenuWrapper whichIsActive='mentorias' />
            <HeroInternal img={PngMentoriaHero} pageName='Letramento' quote={renderContentLetramento('quote')} />
            <div className='mentoria-info snap-item'>
                <div className='mentoria-wrapper'>
                    <div className='mentoria-txt'>
                        <h2>{renderContentLetramento('main_title')}</h2>
                        <div className='mentoria-list'>
                            {mentoriaList?.map((item: any, index: any) => (
                                <Item key={index} number={item.number} text={item.text} />
                            ))}
                        </div>
                        <p>{renderContentLetramento('legal_text')}  </p>
                    </div>
                    <div className='img-letramento'>
                        <Donut color='#86CDEC' className='donut1' size={360} />
                        <Donut color='#86ECBD' className='donut2' size={156} />
                        <Donut color='#86ECE8' className='donut3' size={68} />
                        <img src={PngIzaLetramento} className='iza-letramento' alt='iza' />
                    </div>
                </div>
            </div>
            <ContactCTA text={renderContentLetramento('contact_text')} />
            <Footer />
        </>
    );
}

export default Mentorias;