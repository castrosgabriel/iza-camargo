import Donut from "../../components/Donut";
import './Mestre.css';

type InternalFrameProps = {
    title?: string;
    txt?: string;
    img?: string;
    colors?: [
        string,
        string,
        string
    ];
}

const InternalFrame = ({ title, txt, img, colors = ['#86CDEC', '#86ECBD', '#86ECE8'] }: InternalFrameProps) => {
    return (
        <div className='mestre-frame'>
            <div className='mestre-width'>
                <div className='mestre-txt'>
                    <h2>{title}</h2>
                    <p>{txt}</p>
                </div>
                <div className='img-mestre'>
                    <img src={img} alt='mestre' />
                    <Donut color={colors[0]} className='donut-mestre-1' size={172} />
                    <Donut color={colors[1]} className='donut-mestre-2' size={104} />
                    <Donut color={colors[2]} className='donut-mestre-3' size={530} />
                </div>
            </div>
        </div>
    )
}

export default InternalFrame;