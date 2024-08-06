import CardTestimonal from "./CardTestimonal"
import Galery from "./Galery"

type GaleryTestimonalProps = {
    testimonials: {
        image?: string
        name: string
        subtitle: string
        description: string
    }[]
}

const GaleryTestimonal = ({testimonials}: GaleryTestimonalProps) => {
    return (
        <>
            <Galery gap={0} backgroundColor='var(--c-white)' titleColor='var(--c-black)' title='Depoimentos'>
                {testimonials.map((testimonal, index) =>
                    <CardTestimonal
                        key={index}
                        image={testimonal.image}
                        name={testimonal.name}
                        subtitle={testimonal.subtitle}
                        description={testimonal.description}
                    />
                )}
            </Galery>
        </>
    )
}

export default GaleryTestimonal