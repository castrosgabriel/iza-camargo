import Button from '../button/Button';
import { PngBook } from '../../assets/png';
import './BookSeller.css'

type bookSellerProps = {
    mouseMove: {
        x: number
        y: number
    }
}

const BookSeller = ({ mouseMove }:bookSellerProps) => {
    return (
        <div className='book-container'>
            <div className='book-content'>
                <div className='book-content-wrapper'>
                    <h2>Dá um tempo!</h2>
                    <p>é um convite à busca por limite em um mundo sem limites.</p>
                    <Button text='Comprar livro' color='var(--c-secondary)' />
                </div>
                <img className='book-img' src={PngBook} alt="placeholder" />
            </div>
        </div>
    )
}


export default BookSeller; 