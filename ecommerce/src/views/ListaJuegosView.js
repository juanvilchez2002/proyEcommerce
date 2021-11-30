
import imagen1 from "../assets/halo5.jpg"
import { obtenerJuegos } from "../services/juegosServices"
import { obtenerCategorias } from "../services/categoriaServices";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export default function ListaProductosView() {

    //estado de juegos original
    const [juegoOri, setJuegoOri] = useState([]);

    //estado de juego
    const [juegos, setJuego] = useState([])
    
    //estado de categorias de juego
    const [categoria, setCategoria] =useState([])

    

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
        <div className="bg-light.bg-gradient">
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
                <h2 className="fw-bold container" style={{color:"black"}}>
                    {/* si categoria existe, pregunta por la propiedad nombre */}
                                        Listado de Productos
                </h2>
            </div>

        <div className="container ">         

            <div className="row">
                <div className="col-sm-2 col-md-2">
                    {
                        //realizamos los filtros de categorias
                    }
                    <h3 className="text-center mt-2">
                        Categorias
                    </h3>
                    <div className="d-flex flex-md-column  flex-sm-column jjustify-content-start">
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
                <div className="col-sm-10 col-md-10">
                    <table className="table table-hover table-borderless">
                        <thead className="text-center    ">
                            <tr>
                                <th>
                                    Juego
                                </th>
                                <th>
                                    Cantidad
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
                                <tr key={i}>
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
