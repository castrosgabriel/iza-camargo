import './Modal.css';
import { SvgClose } from "../../assets/svg";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSinglePrismicDocument } from '@prismicio/react';


const Modal = () => {

    const [modalContent] = useSinglePrismicDocument('modal')

    console.log(modalContent);

    const link = modalContent?.data.link.url;
    const img = modalContent?.data.img.url;
    
    const sectionId = 'modal-opened';

    const [isOpen, setIsOpen] = useState(() => {
        const hasSeenModal = sessionStorage.getItem(sectionId);
        return !hasSeenModal;
    });

    useEffect(() => {
        if (isOpen) {
            sessionStorage.setItem(sectionId, "true");
        }
    }, [isOpen, sectionId]);


    return (
        isOpen &&
        <div className='modal-wrp'>
            <div className='modal-ctn'>
                <img
                    onClick={() => setIsOpen(false)}
                    className='close-ctn'
                    src={SvgClose} alt='Close'
                />
                <Link to={link}>
                    <img src={img} alt='Modal' />
                </Link>
            </div>
            <div className='modal-bg' onClick={() => setIsOpen(false)} />
        </div>
    )
}

export default Modal;