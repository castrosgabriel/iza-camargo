import { SvgIso } from '../../assets/svg'
import { SocialMedia } from '../bottom-bar/BottomBar'
import { SmallButton } from '../button/Button'
import './Footer.css'

const Footer = () =>
    <footer className='footer'>
        <div className='footer-content'>
            <img src={SvgIso} />
            <div className='pages'>
                <p><b>Home</b></p>
                <p>Roda da Vida</p>
                <p>Pesquisa</p>
                <p>TEDx</p>
                <p>Livro</p>
                <p>Interioriza</p>
            </div>
            <div className='pages'>
                <p><b>Minha história</b></p>
                <p><b>Palestras</b></p>
                <p><b>Mentorias</b></p>
                <p><b>Loja</b></p>
            </div>
            <div className='contact-section'>
                <p><b>Contato</b></p>
                <div className='contact-content'>
                    <div>
                        <p><span>Contratar Palestras e Mentorias</span></p>
                        <p>Maira Delamor</p>
                        <div>
                            <SmallButton text='+55 11 98281.4747' />
                        </div>
                    </div>
                    <div>
                        <p><span>Assessoria de Imprensa</span></p>
                        <p>Alessandra Bruno Rocha</p>
                        <div>
                            <SmallButton text='+55 11 97498-7070' />
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '2rem', opacity: '.3' }}>
                    <SocialMedia />
                </div>
            </div>
        </div>
    </footer>

export default Footer