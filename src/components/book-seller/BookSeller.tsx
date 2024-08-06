import Button from '../button/Button';
import { PngBook } from '../../assets/png';
import './BookSeller.css'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';

gsap.registerEffect(ScrollToPlugin)

type BookSellerProps = {
    title?: string
    description?: string
    button?: string
}

const BookSeller = ({ title, description, button }: BookSellerProps) => {

    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add('screen and (min-width: 768px)', () => {
            gsap.from('.book-item', {
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                y: '10rem',
                scale: .95,
                scrollTrigger: {
                    trigger: '.book-container',
                    start: 'top bottom',
                    end: '+=100%',
                    scrub: 1,
                }
            })
        })
    }, [])

    return (
        <div id='book-seller' className='book-container snap-item'>
            <div className='book-content '>
                <div className='book-content-wrapper '>
                    <h2 className='book-item'>{title && title}</h2>
                    <p className='book-item'>{description && description}</p>
                    <div className='book-item'>
                        <Button newTab hoverColor='#CA7925' link='https://byizabellacamargo2.lojavirtualnuvem.com.br/produtos/livro-autografado-da-um-tempo-como-encontrar-limite-em-um-mundo-sem-limites/' text={button ? button : 'Comprar livro'} color='var(--c-secondary)' />
                    </div>
                </div>
                <img className='book-img book-item' src={PngBook} alt="placeholder" />
            </div>
        </div>
    )
}


export default BookSeller; 