import { PngIzaAbout } from "../../assets/png"
import CardTestimonal from "./CardTestimonal"
import Galery from "./Galery"

const GaleryTestimonal = () => {
    return (
        <>
            <Galery gap={0} backgroundColor='var(--c-white)' titleColor='var(--c-black)' title='Depoimentos'>
                <CardTestimonal
                    image={PngIzaAbout}
                    name='Izadora Camargo'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum gravida 
                                finibus dapibus. Etiam congue augue non rutrum sagittis. Aliquam a ornare 
                                augue, in scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                                tempus efficitur magna. Phasellus justo lectus, tempus'
                />
                <CardTestimonal
                    image={PngIzaAbout}
                    name='Izadora Camargo'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum gravida 
                                finibus dapibus. Etiam congue augue non rutrum sagittis. Aliquam a ornare 
                                augue, in scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                                tempus efficitur magna. Phasellus justo lectus, tempus'
                />
                <CardTestimonal
                    image={PngIzaAbout}
                    name='Izadora Camargo'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus iaculis pharetra erat, non suscipit ante. Vestibulum gravida 
                                finibus dapibus. Etiam congue augue non rutrum sagittis. Aliquam a ornare 
                                augue, in scelerisque magna. Sed vitae nisi et ligula semper ullamcorper 
                                tempus efficitur magna. Phasellus justo lectus, tempus'
                />
            </Galery>
        </>
    )
}

export default GaleryTestimonal