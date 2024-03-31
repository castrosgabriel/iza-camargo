import { SvgIso } from '../../assets/svg'
import { SocialMedia } from '../bottom-bar/BottomBar'
import { SmallButton } from '../button/Button'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () =>
    <footer className='footer'>
        <div className='footer-content'>
            <Link to='/'><img className='logo-footer' src={SvgIso} /></Link>
            <div className='pages-wrapper'>
                <div className='pages'>
                    <Link to='/'><p><b>Home</b></p></Link>
                    <p>Roda da Vida</p>
                    <p>Pesquisa</p>
                    <p>TEDx</p>
                    <p>Livro</p>
                    <p>Interioriza</p>
                </div>
                <div className='pages'>
                    <Link to='/minha-historia'><p><b>Minha história</b></p></Link>
                    <Link to='/palestras'><p><b>Palestras</b></p></Link>
                    <Link to='/mentorias'><p><b>Mentorias</b></p></Link>
                    <Link to='http://www.google.com'><p><b>Loja</b></p></Link>
                </div>
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