import Card from "./Card";
import "../../../style/card.css"
import "bootstrap/dist/css/bootstrap.min.css";
import lista_img from "../../../data/data_img"


export default function Cards() {
    
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                {
                    lista_img.map((card,i) =>(
                        <div className="col-md-4" key={i}>
                            <Card 
                                title={card.title}
                                desc={card.descrp}
                                img={card.img}
                            />
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}