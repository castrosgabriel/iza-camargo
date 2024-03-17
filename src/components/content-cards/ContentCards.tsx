import './ContentCards.css';
import Button from '../button/Button';
import { PngRodaVida, PngIzaCard } from '../../assets/png';

type CardProps = {
    title: string
    description: string
    image: string
    ctaText: string
    subtitle: string
}

const Card = ({ title, description, image, ctaText, subtitle }: CardProps) =>
    <div className="card-info">
        <div className="content-wrapper">
            <div className='subtitle'>{subtitle}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <Button text={ctaText} />
        <img className='img-wrapper' src={image} alt="placeholder" />
    </div>


const ContentCards = () =>
    <div className='card-container'>
        <Card
            subtitle='Como está seu tempo?'
            title="Roda da vida"
            description="Uma das grandes ilusões é tentar dar conta de uma agenda atual com as características que tínhamos no passado. Se você quiser ter uma fotografia do seu tempo atual, preencha essa roda da vida, do centro para as extremidades, e perceba qual área você está demais e qual área você está de menos na sua própria vida."
            image={PngRodaVida}
            ctaText="Acessar"
        />
        <Card
            subtitle='Como está sua saúde mental?'
            title="Pesquisa"
            description='Selecionei algumas perguntas que vão te ajudar a organizar as ideias e alcançar as respostas que você pode estar precisando. Agradeço seu tempo e confiança. "A saúde mental afeta tudo e tudo afeta a saúde mental!"'
            image={PngIzaCard}
            ctaText="Responder"
        />
    </div>

export default ContentCards;