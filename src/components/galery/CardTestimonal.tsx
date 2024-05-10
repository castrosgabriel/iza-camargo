import './CardTestimonal.css';

type CardTestimonalProps = {
    image: string;
    name: string;
    description: string;
    subtitle?: string;
}

const CardTestimonal = ({ image, name, description, subtitle }: CardTestimonalProps) => {
    return (
        <div className='card-testimonal'>
            <div className='client-name'>
                <img src={image} alt='Client' />
                <div className='testimonal-title'>
                    <h2>{name}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
            <p>{`"${description}"`}</p>
        </div>
    )
}

export default CardTestimonal;
