import './CardTestimonal.css';

type CardTestimonalProps = {
    image: string;
    name: string;
    description: string;
}

const CardTestimonal = ({ image, name, description }: CardTestimonalProps) => {
    return (
        <div className='card-testimonal'>
            <div className='client-name'>
                <img src={image} alt='Client' />
                <h2>{name}</h2>
            </div>
            <p>{`"${description}"`}</p>
        </div>
    )
}

export default CardTestimonal;
