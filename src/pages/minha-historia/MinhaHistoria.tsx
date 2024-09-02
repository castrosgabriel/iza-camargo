import { PngGalery01, PngGalery02, PngGalery03, PngGalery04, PngGalery05, PngGalery06, PngGalery07, PngGalery08, PngGalery09, PngIzaAbout, PngMinhaHistoriaHero } from "../../assets/png";
import './MinhaHistoria.css';
import MenuWrapper from "../../components/menu/MenuWrapper";
import Footer from "../../components/footer/Footer";
import HeroInternal from "../../components/hero/HeroInternal";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GaleryImg from "../../components/galery/GaleryImg";
import GaleryClients from "../../components/galery/GaleryClients";
import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";

export const imgArray = [
    { src: PngGalery01 },
    { src: PngGalery02 },
    { src: PngGalery03 },
    { src: PngGalery04 },
    { src: PngGalery05 },
    { src: PngGalery06 },
    { src: PngGalery07 },
    { src: PngGalery08 },
    { src: PngGalery09 }
]

const MinhaHistoria = () => {

    const [aboutMeContent] = useSinglePrismicDocument('sobre_mim')
    const renderAboutMeContent = (field: string) => {
        return aboutMeContent?.data[field][0].text
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='minha-historia' />
            <HeroInternal
                img={PngMinhaHistoriaHero}
                pageName='Minha História'
                quote={renderAboutMeContent("quote")}
            />
            <div className='about-me-container snap-item'>
                <div className='about-me-wrapper'>
                    <div className='about-me-col'>
                        <div className='iza-name-wrapper'>
                            <img src={PngIzaAbout} alt='Iza Avatar' />
                            <h4>Izabella Camargo</h4>
                        </div>
                        <div className='tags-wrapper'>
                            {
                                aboutMeContent?.data.tag.map((item: any, index: number) => (
                                    <p key={index}>{item.tag_item[0].text}</p>
                                ))
                            }
                        </div>
                        <div className='spacer' />
                        <Link target='_blank' to='https://www.linkedin.com/in/izabellacamargoreal'>
                            <div className='linkedin-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.2722 13.4239C17.2722 10.7778 15.9741 10.2222 14.884 10.2222L14.8827 10.2196C14.3121 10.2101 13.7564 10.4022 13.3134 10.762C12.9363 11.077 12.6443 11.4817 12.4642 11.9389C12.3411 12.309 12.2884 12.6988 12.3089 13.0882V20.9976H7.59439C7.59439 20.987 7.59482 20.8888 7.59557 20.7171C7.60384 18.8288 7.65111 8.04299 7.59439 6.83627H12.3089V8.84258C12.6758 8.24276 13.1587 7.72223 13.7294 7.31152C14.5663 6.75715 15.5539 6.47484 16.5573 6.5032C17.2768 6.47452 17.9942 6.59834 18.6624 6.86652C19.3306 7.1347 19.9345 7.54118 20.4345 8.05928C21.5447 9.41014 22.0992 11.1328 21.9854 12.8776V21.0002H17.2722V13.4239ZM0.270513 20.9976V6.83758L4.9837 6.83495V20.9976H0.270513ZM1.66771 0.129623C1.98711 0.021588 2.32536 -0.0194676 2.66134 0.00901709C2.99798 -0.0169848 3.33635 0.0270239 3.65515 0.138268C3.97393 0.249512 4.26623 0.425581 4.5136 0.655378C4.76097 0.885176 4.95805 1.16372 5.09244 1.47346C5.22682 1.78319 5.29559 2.1174 5.2944 2.45503C5.29984 2.77759 5.23936 3.09785 5.11666 3.39621C4.99396 3.69457 4.81163 3.96473 4.58084 4.19015C4.04918 4.67372 3.34927 4.92985 2.63106 4.90368H2.60078C2.2642 4.92384 1.92707 4.87443 1.61044 4.75853C1.2938 4.64262 1.00445 4.46272 0.760434 4.23003C0.516418 3.99734 0.322974 3.71686 0.192172 3.40609C0.0613698 3.09533 -0.0039833 2.76094 0.000187793 2.4238C0.00435888 2.08666 0.0779656 1.75399 0.216417 1.44656C0.354868 1.13912 0.555192 0.863515 0.804891 0.636933C1.05459 0.410352 1.3483 0.237657 1.66771 0.129623Z" fill="white" />
                                </svg>
                                <p>Acessar Linkedin</p>
                            </div>
                        </Link>
                    </div>
                    <div className='about-me-txt'>
                        <h2>{renderAboutMeContent("main_title")}</h2>
                        <PrismicRichText field={aboutMeContent?.data.main_text} />
                        <h2>{renderAboutMeContent("projects_title")}</h2>
                        <div className='txt-row'>
                            <PrismicRichText field={aboutMeContent?.data.project_text} />
                        </div>
                    </div>
                </div>
            </div>
            <GaleryImg imgArray={imgArray} />
            <GaleryClients />
            <Footer />
        </>
    );
}

export default MinhaHistoria;