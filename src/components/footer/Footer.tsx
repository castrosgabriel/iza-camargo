import { SvgIso } from '../../assets/svg'
import { SocialMedia } from '../bottom-bar/BottomBar'
import { SmallButton } from '../button/Button'
import { Link } from 'react-router-dom'
import './Footer.css'
import { ReactNode } from 'react'
import { useSinglePrismicDocument } from '@prismicio/react'

type ScrollToProps = {
    to: string,
    children?: ReactNode
}

type ScrollToTopProps = {
    children?: ReactNode
}

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div style={{ cursor: 'pointer' }} onClick={handleClick}>
            {children}
        </div>
    )
}

export const ScrollTo = ({ to, children }: ScrollToProps) => {
    const handleClick = () => {
        const element = document.querySelector(to);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div style={{ cursor: 'pointer' }} onClick={handleClick}>
            {children}
        </div>
    )

}

const Footer = () => {

    const [footerContent] = useSinglePrismicDocument('footer')

    const contatoArray = footerContent?.data.contato.map((item: any) => ({
        title: item.contato_topico[0].text,
        name: item.contato_nome[0].text,
        phone: item.contato_numero[0].text,
        link: item.contato_link.url
    })) ?? [];

    return (
        <footer id='footer' className='footer'>
            <div className='footer-content'>
                <Link to='/'><ScrollToTop><img className='logo-footer' src={SvgIso} /></ScrollToTop></Link>
                <div className='pages-wrapper'>
                    <div className='pages'>
                        <Link to='/'><ScrollToTop><p><b>Home</b></p></ScrollToTop></Link>
                        <ScrollTo to='#content-cards'><p>Roda da Vida</p></ScrollTo>
                        <ScrollTo to='#content-cards'><p>Pesquisa</p></ScrollTo>
                        <ScrollTo to='#living-room-first'><p>TEDx</p></ScrollTo>
                        <ScrollTo to='#book-seller'><p>Livro</p></ScrollTo>
                        <ScrollTo to='#living-room-second'><p>Interioriza</p></ScrollTo>
                    </div>
                    <div className='pages'>
                        <Link to='/minha-historia'><p><b>Minha história</b></p></Link>
                        <Link to='/palestras'><p><b>Palestras</b></p></Link>
                        <Link to='/mentorias'><p><b>Letramento</b></p></Link>
                        <Link to='/mestre'><p><b>Mestre de Cerimônias</b></p></Link>
                        <Link to='/campanhas'><p><b>Campanhas e Ações</b></p></Link>
                        <Link to='https://byizabellacamargo2.lojavirtualnuvem.com.br'><p><b>Loja</b></p></Link>
                    </div>
                </div>
                <div className='contact-section'>
                    <p><b>Contato</b></p>
                    <div className='contact-content'>
                        {contatoArray.map((contato: any, index: any) => (
                            <div key={index}>
                                <p><span>{contato.title}</span></p>
                                <p>{contato.name}</p>
                                <div>
                                    <SmallButton text={contato.phone} link={contato.link} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ paddingTop: '2rem', opacity: '.3' }}>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer