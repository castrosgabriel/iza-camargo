import { useState } from "react";
import './Galery.css'
import Galery from "./Galery"

const GaleryImg = ({ imgArray }: { imgArray: { src: string }[] }) => {

    const [imgZoom, setImgZoom] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");

    const renderImgZoom = () => {
        return (
            <div onClick={() => setImgZoom(false)} className='img-zoom'>
                <img src={selectedImg} alt={`${selectedImg}`} />
            </div>
        )
    }

    return (
        <Galery>
            {
                imgArray.map((img, index) => {
                    return (
                        <>
                            {imgZoom && renderImgZoom()}
                            <img style={{ cursor: 'pointer' }} onClick={() => {
                                setImgZoom(true);
                                setSelectedImg(img.src);
                            }} src={img.src} key={index} alt='galery' />
                        </>
                    )
                })
            }
        </Galery>
    )
}

export default GaleryImg;