import Button from '../button/Button';
import { PngBook } from '../../assets/png';
import './BookSeller.css'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';

gsap.registerEffect(ScrollToPlugin)

const BookSeller = () => {

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
                    <h2 className='book-item'>Dá um tempo!</h2>
                    <p className='book-item'>é um convite à busca por limite em um mundo sem limites.</p>
                    <p className='book-item' style={{fontSize:'1.4rem'}}>R$ 49,90</p>
                    <div className='book-item'>
                        <Button newTab hoverColor='#CA7925' text='Comprar livro' color='var(--c-secondary)' />
                    </div>
                </div>
                <img className='book-img book-item' src={PngBook} alt="placeholder" />
            </div>
        </div>
    )
}


export default BookSeller; 