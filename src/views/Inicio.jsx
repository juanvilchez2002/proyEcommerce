import CarouselApp from "../components/carousel"
import Cards from "../components/Cards"

export default function Inicio() {
    return (
        <div>
            <CarouselApp />
            <div className="d-flex align-items-center justify-content-center">
                <Cards />
            </div>
        </div>
    )
}
