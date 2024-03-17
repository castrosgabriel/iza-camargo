import { PngPlant, PngTBack, PngTFront } from '../../assets/png'
import Button from '../button/Button'
import './Store.css'

const Store = () =>
    <div className='store-container'>
        <img src={PngPlant} className='img-plant' alt='plant-store' />
        <div className='container-full'>
            <div className='content-wrapper-store'>
                <h3>Conheça nossa loja virtual</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor, massa id maximus efficitur, mi nulla molestie velit, efficitur dapibus leo arcu aliquam lectus. Vivamus tempor mauris eu neque tincidunt maximus. </p>
                <Button text='Acessar loja' />
            </div>
        </div>
        <img src={PngTFront} className='img-t-front' alt='t-front' />
        <img src={PngTBack} className='img-t-back' alt='t-back' />
    </div>

export default Store
