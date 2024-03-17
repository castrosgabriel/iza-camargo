import { PngCellphone, PngRack, PngTv, PngTvContent } from '../../assets/png'
import Button from '../button/Button'
import './LivingRoom.css'

const LivingRoom = () =>
    <div className='living-room'>
        <div className='sections-wrapper'>
            <div className='living-room-first'>
                <img className='rack' src={PngRack} />
                <img className='tv tv-content' src={PngTvContent} />
                <img className='tv' src={PngTv} />
            </div>
            <div className='living-room-second'>
                <div className='content-wrapper'>
                    <h2>Já conhece o Podcast Interioriza?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, massa id maximus efficitur, mi nulla molestie velit, efficitur dapibus leo arcu aliquam lectus. Vivamus tempor mauris eu neque tincidunt maximus. </p>
                    <Button text='Ouvir agora' />
                </div>
                <img className='cellphone' src={PngCellphone} />
            </div>
        </div>
    </div>


export default LivingRoom