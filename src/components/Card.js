import img1 from "../assets/41PPdkP1bzL.jpg"

export default function Card({title, desc, img,}) {

    return (
        <div className="card text-center bg-dark ">
            <img src={img} alt="PS4" className="img-titulo"/>
            <div className="card-body text-light card-cont">
                <h4 className="card-title">
                    {title}
                </h4>
                <p className="card-text text-secondary">
                {desc}
                </p>
                <a href="#!" className="btn btn-outline-secondary rounded-0">
                    COMPRARLO
                </a>
            </div>
        </div>
    )
}
