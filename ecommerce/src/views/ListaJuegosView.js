
import imagen1 from "../assets/halo5.jpg"
import { obtenerJuegos } from "../services/juegosServices"
import { obtenerCategorias } from "../services/categoriaServices";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListaProductosView() {

    //estado de juegos original
    const [juegoOri, setJuegoOri] = useState([]);

    //estado de juego
    const [juegos, setJuego] = useState([])
    
    //estado de categorias de juego
    const [categoria, setCategoria] =useState([])

    //
    const navigate = useNavigate()
    

    const getDatos = async() =>{
        try {
            let juegoObt = await obtenerJuegos();
            setJuegoOri(juegoObt);
            setJuego(juegoObt);

            let categoriaObt = await obtenerCategorias();
            setCategoria(categoriaObt)

        } catch (error) {
            throw error
        }
    }
    
    //filtramos los juegos por categorias
    const filtrarPorCategoria = (idCategoria) =>{
        const productosFiltrados = juegoOri.filter((prod)=>
            prod.categoria_id == idCategoria
        )
        
        setJuego(productosFiltrados);
    }

    //para cargarlos una vez que se inicialice la pagina
    useEffect(()=>{
       getDatos();
    },[]);

    
    return (
        <div className="bg-dark bg-gradient">
            {
                    /**
                     * para mostrar el banner de la pagina
                     */
            }
            <div
                

                className="title-md-product py-4 mb-3 text-center"
                style={{
                    backgroundImage: `url(${imagen1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat"
                }}
            >
                <h2 className="fw-bold container " style={{color:"black"}}>
                    {/* si categoria existe, pregunta por la propiedad nombre */}
                                        Listado de Juegos
                </h2>
            </div>

        <div className="container bg-light">         

            <div className="row">
                <div className="col-xs-3 col-md-3 d-flex flex-column flex-wrap">
                    {
                        //realizamos los filtros de categorias
                    }
                    <h4 className="text-center mt-2 sticky-top">
                        Categorias de Juegos
                    </h4>
                    <div className="d-flex flex-md-column flex-wrap flex-sm-column justify-content-start sticky-top">
                        <button className="btn btn-dark mt-2 mb-2" onClick={()=>{
                            navigate("/admin")
                        }}>
                            Regresar
                        </button>
                        <button className="btn btn-outline-dark mt-2 mb-2" onClick={()=>{
                            setJuego(juegoOri)
                        }}>
                            Todas
                        </button>
                        {
                            categoria.map((cat, i) =>(
                                <button 
                                    className="btn btn-outline-dark my-2" 
                                    key={i}
                                    onClick={()=>{
                                        filtrarPorCategoria(cat.id);
                                    }}
                                >
                                    {
                                        cat.nombre
                                    }
                                </button>
                                )
                            )
                        }
                    </div>

                </div>
                <div className="col-xs-9 col-md-9 d-flex flex-column align-items-center">
                    <table className="table table-hover table-borderless ">
                        <thead >
                            <tr className="text-center sticky-top">
                                <th>
                                    Nombre del Juego
                                </th>
                                <th>
                                    Stock
                                </th>
                                <th>
                                    Precio
                                </th>
                                <th>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            juegos.map(
                                (
                                    {nom_juego, qty_juego, precio_juego, categoria_id, id}, i)=>(
                                <tr key={i} className="text-center">
                                    <td>
                                        {nom_juego}
                                    </td>
                                    <td 
                                        style={
                                            {textAlign:"center"}
                                    }>
                                        {qty_juego}
                                    </td>
                                    <td>
                                        S/. {precio_juego}.00
                                    </td>
                                    <td
                                        style={
                                            {textAlign:"center"}
                                        }
                                    >
                                        <Link 
                                            className="btn btn-info me-2" 
                                            to={`/editarproducto/${id}`}
                                    >
                                            Editar
                                        </Link>
                                        <buttom 
                                            className="btn btn-danger"
                                            onClick={
                                                ()=>{
                                                    //verificarEliminar(id);
                                                }
                                            }
                                        >
                                            Eliminar
                                        </buttom>
                                    </td>
                                </tr>
                            ))
                    }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}
