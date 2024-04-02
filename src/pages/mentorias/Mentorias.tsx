import { PngMentoriaHero } from "../../assets/png";
import Footer from "../../components/footer/Footer";
import GaleryTestimonal from "../../components/galery/GaleryTestimonal";
import HeroInternal from "../../components/hero/HeroInternal";
import MenuWrapper from "../../components/menu/MenuWrapper";
import FormSection from "../../components/form/FormSection";
import { PngMentoriaIza } from "../../assets/png";
import { useEffect } from "react";
import './Mentorias.css';

const Mentorias = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MenuWrapper whichIsActive='mentorias' />
            <HeroInternal
                img={PngMentoriaHero}
                pageName='Mentorias'
                quote='O quanto você está se incluindo nas suas 35 mil escolhas diárias?'
            />
            <div className='mentoria-info snap-item'>
                <div className='mentoria-wrapper'>
                    <div className='mentoria-txt'>
                        <h3>Sua jornada <br /> de mudança</h3>
                        <p>
                            Em alguns momentos da vida precisamos de alguém que nos ajude a “sair da ilha para ver a ilha”, como já escreveu José Saramago.
                            <br /><br />
                            Depois de me especializar em gerenciamento do estresse e segurança psicológica de times, além de comunicação, estou abrindo alguns horários na agenda para te ajudar a passar por alguma transição.
                            <br /><br />
                            Já que a única certeza que temos é a incerteza, saber como lidar com os imprevistos e oportunidades é uma habilidade que podemos e devemos treinar.
                            <br /><br />
                            <b>Conteúdo:</b> alinhado exclusivamente.
                            <br /><br />
                            <b>5 horas.</b>
                        </p>
                    </div>
                    <img src={PngMentoriaIza} alt='iza' />
                </div>
            </div>
            <FormSection
                title='Agende agora a sua mentoria'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum 
                gravida finibus dapibus. Etiam congue augue non rutrum sagittis. 
                Aliquam a ornare augue, in scelerisque magna. Sed vitae nisi et 
                ligula semper ullamcorper tempus efficitur magna. Phasellus justo
                 lectus, tempus pulvinar lacus a, tincidunt sagittis odio. Etiam
                  congue augue non rutrum sagittis. Aliquam a ornare augue, in 
                  scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                  tempus efficitur magna.'
            />
            <GaleryTestimonal />
            <Footer />
        </>
    );
}

export default Mentorias;