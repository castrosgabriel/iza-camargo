import Button from '../button/Button';
import { PngBook } from '../../assets/png';
import './BookSeller.css'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerEffect(ScrollToPlugin)

const BookSeller = () => {

    useGSAP(() => {
        const enterElementsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.book-container',
                start: 'top bottom',
                end: 'bottom bottom',
                snap: 1,
            }
        })

        enterElementsTl.from('.book-content', {
            y: 100,
            opacity: 0,
            duration: 1,
        })
            .from('.book-img', {
                y: 100,
                opacity: 0,
                duration: 1,
            }, 0)
            .from('.book-content h2', {
                y: 100,
                opacity: 0,
                duration: 1,
            }, 0.3)
            .from('.book-content p', {
                y: 100,
                opacity: 0,
                duration: 1,
            }, 0.15)

        const leaveElementsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.book-container',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
            }
        })

        leaveElementsTl.to('.book-img', {
            y: '-=10%',
            duration: 1,
        })
            .to('.book-content', {
                y: '-=20%',
                duration: 1,
            }
            )
    }, [])

    return (
        <div className='book-container'>
            <div className='book-content'>
                <div className='book-content-wrapper'>
                    <h2>Dá um tempo!</h2>
                    <p>é um convite à busca por limite em um mundo sem limites.</p>
                    <Button hoverColor='#CA7925' text='Comprar livro' color='var(--c-secondary)' />
                </div>
                <img className='book-img' src={PngBook} alt="placeholder" />
            </div>
        </div>
    )
}


export default BookSeller; 