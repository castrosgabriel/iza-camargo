import Galery from "./Galery";
import './Galery.css';
import clientsArray from '../../assets/png/clients/clientsArray';

const GaleryClients = () => {

    const newClientsArray = [];
    for (let i = 0; i < clientsArray.length; i += 2) {
        newClientsArray.push(
            <div className='client-item' key={i}>
                <img src={clientsArray[i].src} alt='galery' />
                {i + 1 < clientsArray.length && (
                    <img src={clientsArray[i + 1].src} alt='galery' />
                )}
            </div>
        );
    }

    const getHeight = () => {
        const width = window.innerWidth;
        if (width <= 768) return '90vh';
        return '70vh';
    }

    return (
        <Galery height={getHeight()} backgroundColor='var(--c-white)' titleColor='var(--c-dark)' title='Clientes'>
            {
                newClientsArray.map((item, index) => (
                    <div key={index} className='galery-row'>
                        {item}
                    </div>
                ))
            }
        </Galery>
    )
}

export default GaleryClients;
