import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import { obtenerProductos1 } from "../../services/Services"

export default function Busqueda() {
    const [productos,setProductos] = useState([])
    
    const {busqueda} = useParams()

    const getData = async () => {
        try {
            const prodObtenidos = await obtenerProductos1(busqueda)
            setProductos(prodObtenidos)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
            <h4 className="mt-2 text-primary text-center mt-3">Resultado de busqueda:</h4> 
            {productos.length > 0? productos.map((prod,i) => (
                <div className ="col-sm-10 col-md-6 col-lg-4" key={i}>
                    <div className="card text-center bg-dark ">
                        <img src={prod.img_juego} alt={prod.nom_juego} className="img-titulo"/>
                        <div className="card-body text-light card-cont">
                        <h4 className="card-title">
                        {prod.nom_juego}
                        </h4>
                        <p className="card-text text-secondary">
                        {prod.desc_juego}
                        </p>
                        <div className="d-flex justify-content-center">
                        <a href="#!" className="btn btn-outline-secondary rounded-0">
                        COMPRAR
                        </a>
                        <h3 className="ms-4 text-secondary">S/ {prod.precio_juego.toFixed(2)}</h3>
                        </div>
                        </div>
                    </div>
                </div>
            )) : <h2 className="text-center text-secondary">No hay resultados</h2>
        }
            </div>
        </div>
    )
}
