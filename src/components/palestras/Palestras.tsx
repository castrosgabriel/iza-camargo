import { PngIzaAbout, PngPalestraHero } from "../../assets/png";
import Footer from "../footer/Footer";
import CardTestimonal from "../galery/CardTestimonal";
import Galery from "../galery/Galery";
import HeroInternal from "../hero/HeroInternal";
import MenuWrapper from "../menu/MenuWrapper";
import { imgArray } from "../minha-historia/MinhaHistoria";

const Palestras = () => {
    return (
        <>
            <MenuWrapper whichIsActive='palestras' />
            <HeroInternal
                img={PngPalestraHero}
                pageName='Palestras'
                quote='Não há uma vida pessoal e outra profissional'
            />
            <Galery>
                {
                    imgArray.map((img: any, index: number) => {
                        return (
                            <img src={img.src} key={index} alt='galery' />
                        )
                    })
                }
            </Galery>
            <Galery gap={0} backgroundColor='var(--c-white)' titleColor='var(--c-black)' title='Depoimentos'>
                <CardTestimonal
                    image={PngIzaAbout}
                    name='Izadora Camargo'
                    description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum gravida 
                    finibus dapibus. Etiam congue augue non rutrum sagittis. Aliquam a ornare 
                    augue, in scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                    tempus efficitur magna. Phasellus justo lectus, tempus”'
                />
                <CardTestimonal
                    image={PngIzaAbout}
                    name='Izadora Camargo'
                    description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum gravida 
                    finibus dapibus. Etiam congue augue non rutrum sagittis. Aliquam a ornare 
                    augue, in scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                    tempus efficitur magna. Phasellus justo lectus, tempus”'
                />
                <CardTestimonal
                    image={PngIzaAbout}
                    name='Izadora Camargo'
                    description='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum gravida 
                    finibus dapibus. Etiam congue augue non rutrum sagittis. Aliquam a ornare 
                    augue, in scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                    tempus efficitur magna. Phasellus justo lectus, tempus”'
                />
            </Galery>
            <Footer />
        </>
    );
}

export default Palestras;