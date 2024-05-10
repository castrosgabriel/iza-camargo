import { Link } from 'react-router-dom'
import { SvgLoadingSpin, SvgWhatsBtn } from '../../assets/svg'
import './Button.css'
import { CSSProperties, memo, useEffect, useRef } from 'react'
import gsap from 'gsap'

type ButtonProps = {
    text: string
    color?: string
    hoverColor?: string
    link?: string
    img?: string
    type?: 'button' | 'submit'
    loading?: boolean
    submited?: boolean
    newTab?: boolean
}

const Button = memo(({
    type = 'button',
    link = '',
    text,
    color = 'var(--c-primary)',
    hoverColor = 'var(--c-support)',
    loading = false,
    newTab = false
}: ButtonProps) => {

    const buttonTextStyle: CSSProperties = {
        opacity: loading ? 0 : 1,
        pointerEvents: loading ? 'none' : 'all'
    }

    const loadingStyle: CSSProperties = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: loading ? 1 : 0,
    }

    const baseButtonStyle: CSSProperties = {
        backgroundColor: loading ? hoverColor : color,
        pointerEvents: loading ? 'none' : 'all'
    }

    const spinnerRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (loading)
            gsap.to(spinnerRef.current, { rotation: 360, duration: 1, repeat: -1, ease: 'none' })
    }, [loading])

    const BaseButton = () =>
        <button type={type} style={baseButtonStyle} className='btn-wrapper'>
            <div className='hover-text'>
                <img ref={spinnerRef} src={SvgLoadingSpin} style={loadingStyle} />
                <div style={buttonTextStyle} className='col-hover'>
                    <span>{text}</span>
                    <span style={{ color: 'white' }}>{text}</span>
                </div>
            </div>
            <div className='hover-btn' style={{ backgroundColor: hoverColor }} />
        </button>

    return (
        <>
            {type === 'button' ? (
                <Link target={newTab ? '_blank' : undefined} to={link}>
                    <BaseButton />
                </Link>
            ) : (
                < BaseButton />
            )
            }
        </>
    )
})

export const SmallButton = ({ img = SvgWhatsBtn, text, color = 'var(--c-primary)' }: ButtonProps) =>
    <button style={{ backgroundColor: color }} className='btn-wrapper small'>
        <img src={img} />
        {text}
    </button>


export default Button;  