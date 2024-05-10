import HeroInternal from "../../components/hero/HeroInternal";
import { PngCampanhaHero, PngIzaCampanha } from "../../assets/png";
import ContactCTA from "../../components/form/ContactCTA";
import Footer from "../../components/footer/Footer";
import MenuWrapper from "../../components/menu/MenuWrapper";
import { InternalFrame } from "../mestre/Mestre";
const Campanhas = () => {
    return (
        <>
            <MenuWrapper whichIsActive='campanhas' />
            <HeroInternal
                pageName='Campanhas e Ações'
                img={PngCampanhaHero}
                quote='O quanto você está se incluindo nas suas 35 mil escolhas diárias?'
            />
            <InternalFrame
                title="Construindo pontes entre marcas e público"
                txt="Com mais de 20 anos de experiência na TV e há 05 anos dedicando-se
             à promoção da qualidade de vida junto às empresas, meu perfil é ideal 
             para representar marcas. Com credibilidade consolidada, trago consigo 
             a confiança e o reconhecimento do público. Minha trajetória na televisão 
             me permitiu desenvolver habilidades de comunicação eficazes, além de
             construir uma reputação sólida como um profissional confiável e comprometido.
              Ao longo dos anos, tenho trabalhado para conectar marcas com seus públicos-alvo,
               transmitindo mensagens autênticas e impactantes. Com o meu conhecimento e expertise,
                posso garantir resultados positivos e duradouros para as empresas que escolherem me 
                ter como representante. "
                img={PngIzaCampanha}
            />
            <ContactCTA />
            <Footer />
        </>
    )
}

export default Campanhas;