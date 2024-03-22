import { SvgWhatsBtn } from '../../assets/svg'
import './Button.css'

type ButtonProps = {
    text: string
    color?: string
    hoverColor?: string
    link?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

const Button = ({ link, text, color = 'var(--c-primary)', hoverColor = 'var(--c-support)', onMouseEnter, onMouseLeave }: ButtonProps) =>
    <a href={link}>
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ backgroundColor: color }} className='btn-wrapper'>
            <div className='hover-text'>
                <div className='col-hover'>
                    <span>{text}</span>
                    <span style={{ color: 'white' }}>{text}</span>
                </div>
            </div>
            <div className='hover-btn' style={{ backgroundColor: hoverColor }} />
        </button>
    </a>

export const SmallButton = ({ text, color = 'var(--c-primary)' }: ButtonProps) =>
    <button style={{ backgroundColor: color }} className='btn-wrapper small'>
        <img src={SvgWhatsBtn} />
        {text}
    </button>


export default Button;  