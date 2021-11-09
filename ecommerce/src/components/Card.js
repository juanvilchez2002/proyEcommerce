import img1 from "../assets/41PPdkP1bzL.jpg"

export default function Card() {
    return (
        <div className="card">
            <img src={img1} alt="PS4"/>
            <div className="card-body">
                <h4 className="card-title">
                    Video Juego 1
                </h4>
                <p className="card-text text-secondary">
                God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment.
                </p>
            </div>
        </div>
    )
}
