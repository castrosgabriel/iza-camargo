import { Link } from 'react-router-dom'
import { SvgWhatsBtn } from '../../assets/svg'
import './Button.css'

type ButtonProps = {
    text: string
    color?: string
    hoverColor?: string
    link?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    img?: string
    type?: 'button' | 'submit'
}

const Button = ({
    type = 'button',
    link = '',
    text,
    color = 'var(--c-primary)',
    hoverColor = 'var(--c-support)',
    onMouseEnter,
    onMouseLeave
}: ButtonProps) => {

    const BaseButton = () =>
        <button type={type} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ backgroundColor: color }} className='btn-wrapper'>
            <div className='hover-text'>
                <div className='col-hover'>
                    <span>{text}</span>
                    <span style={{ color: 'white' }}>{text}</span>
                </div>
            </div>
            <div className='hover-btn' style={{ backgroundColor: hoverColor }} />
        </button>

    return (
        <>
            {type === 'button' ? (
                <Link to={link}>
                    <BaseButton />
                </Link>
            ) : (
                < BaseButton />)
            }
        </>
    )
}




export const SmallButton = ({ img = SvgWhatsBtn, text, color = 'var(--c-primary)' }: ButtonProps) =>
    <button style={{ backgroundColor: color }} className='btn-wrapper small'>
        <img src={img} />
        {text}
    </button>


export default Button;  