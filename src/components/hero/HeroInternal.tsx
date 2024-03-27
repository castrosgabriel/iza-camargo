import BottomBar from "../bottom-bar/BottomBar"
import './Hero.css'

type HeroProps = {
    img: string;
    pageName: string;
    quote: string;
}

const HeroInternal = ({ img, pageName, quote }: HeroProps) => {
    return (
        <div className='hero-internal'>
            <img src={img} />
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