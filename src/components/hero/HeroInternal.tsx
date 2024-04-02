import { SvgArrow } from "../../assets/svg";
import BottomBar from "../bottom-bar/BottomBar"
import './Hero.css'

type HeroProps = {
    img: string;
    pageName: string;
    quote: string;
}

const HeroInternal = ({ img, pageName, quote }: HeroProps) => {

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div className='hero-internal snap-item'>
            <img src={img} />
            <h1 className='page-name-internal'>{pageName}</h1>
            <div style={{cursor: 'pointer'}} onClick={handleScrollDown} className='arrow-internal'>
                <img src={SvgArrow} />
            </div>
            <div className='bottom-internal'>
                <BottomBar
                    internal={true}
                    pageName={pageName}
                    quote={quote}
                />
            </div>
        </div>
    )
}

export default HeroInternal;