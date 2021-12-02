import { useParams,Link } from "react-router-dom"
import { useEffect, useState} from "react"
import { obtenerProductos1 } from "../../services/Services"
import pageNotFound from "../../assets/img/page-not-found.png"

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
                <Link to={`/detalle/${prod.id}`} style={{textDecoration:"none"}} className ="col-sm-10 col-md-6 col-lg-4" key={i}>
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
                        <h3 className="ms-4 text-secondary">S/ {prod.precio_juego.toFixed(2)}</h3>
                        </div>
                        </div>
                    </div>
                </Link>
            )) : <div className="mb-5 mt-3">
                <h2 className="text-center text-dark fw-bold">Page Not Found</h2>
                <img className="mb-5" src={pageNotFound} alt="pageNotFound" style={{width:"100%"}}/>
            </div>
        }
            </div>
        </div>
    )
}
