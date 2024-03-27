import { useEffect, useRef, useState } from 'react';
import './Palestra.css';
import gsap from 'gsap';

type SliderPalestraProps = {
    itemsArray: Array<{
        img: string,
        name: string,
        content: string
    }>
}

const SliderPalestra = ({ itemsArray }: SliderPalestraProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const sliderItems = slider?.querySelectorAll('.slider-item');
      
        if (slider && sliderItems) {
          gsap.to(sliderItems, {
            duration: 0.5,
            x: '-100%',
            onComplete: () => {
              setActiveIndex(activeIndex);
              gsap.fromTo(
                sliderItems,
                { x: '-100%' },
                { duration: 0.5, x:0 , opacity: 1, stagger: 0.2 }
              );
            }
          });
        }
      }, [activeIndex]);

    const getFirstItemIndex = (activeIndex: number) => {
        if (activeIndex === 0) {
            return itemsArray.length - 1;
        }
        return activeIndex - 1;
    }
    const getLastItemIndex = (activeIndex: number) => {
        if (activeIndex === itemsArray.length - 1) {
            return 0;
        }
        return activeIndex + 1;
    }

    const goToNextSlide = () => {
        if (activeIndex === itemsArray.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }
    const goToPrevSlide = () => {
        if (activeIndex === 0) {
            setActiveIndex(itemsArray.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    const renderFirstItem = () => {
        return itemsArray[getFirstItemIndex(activeIndex)];
    }

    const renderLastItem = () => {
        return itemsArray[getLastItemIndex(activeIndex)];
    }

    return (
        <div className='slider-container'>
            <button className='slider-button' onClick={goToPrevSlide}>Anterior</button>
            <div className='slider-content' ref={sliderRef}>
                <div className='slider-item' key={getFirstItemIndex(activeIndex)}>
                    <img style={{filter:'blur(5px)'}} src={renderFirstItem().img} />
                    <div style={{opacity:0.1}} className='slider-text'>
                        <p>PALESTRA</p>
                        <h3>{renderFirstItem().name}</h3>
                        <p>{renderFirstItem().content}</p>
                        <p><b>Conteúdo</b>
                            <br />Segurança psicológica e atualização de identidade.</p>
                    </div>
                </div>
                <div className='slider-item' key={activeIndex}>
                    <img src={itemsArray[activeIndex].img} />
                    <div className='slider-text'>
                        <p>PALESTRA</p>
                        <h3>{itemsArray[activeIndex].name}</h3>
                        <p>{itemsArray[activeIndex].content}</p>
                        <p><b>Conteúdo</b>
                            <br />Segurança psicológica e atualização de identidade.</p>
                    </div>
                </div>
                <div className='slider-item' key={getLastItemIndex(activeIndex)}>
                    <img style={{filter:'blur(5px)'}} src={renderLastItem().img} />
                    <div style={{opacity:0.1}} className='slider-text'>
                        <p>PALESTRA</p>
                        <h3>{renderLastItem().name}</h3>
                        <p>{renderLastItem().content}</p>
                        <p><b>Conteúdo</b>
                            <br />Segurança psicológica e atualização de identidade.</p>
                    </div>
                </div>
            </div>
            <button className='slider-button' onClick={goToNextSlide}>Próximo</button>

        </div>
    )
}

export default SliderPalestra