import { obtenerProductosPorId, obtenerCategorias } from "../../services/Services"; 
import { useState, useEffect} from "react";
import { useParams } from "react-router";
import ReactImageMagnify from "react-image-magnify";

  
  export default function ProductoId() {

    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [categoria, setCategoria] = useState("");

    const { id } = useParams()

    const getProducto = async () => {
        try {
            const prodObtenido = await obtenerProductosPorId(id);
            const catObtenidas = await obtenerCategorias();
            const catProducto = catObtenidas.find((cat) => cat.id == prodObtenido.categoria_id);
            setProducto(prodObtenido);
            setCategoria(catProducto)
        } catch (error) {
            throw error
        }
    };

    const modificarCantidad = (numero) => {
        if (cantidad + numero === 0 || cantidad + numero === 11) {
            return
        }
        setCantidad(cantidad + numero);
    }

    useEffect(() => {
        getProducto();
    }, []);

      return (
              <>
              <div className="text-center my-3 mb-4 text-primary">
                  <h2>{categoria?.nombre} - {producto?.nom_juego}</h2>
              </div>
            <div className="container">
                <div className="row my-3 d-flex justify-content-center">
                    {producto ? (
                        <>
                            <div style={{width:"35%"}} className="col-12 col-md-6">
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: producto.nom_juego,
                                            isFluidWidth: true,
                                            src: producto.img_juego,
                                        },
                                        largeImage: {
                                            src: producto.img_juego,
                                            width: 1080,
                                            height: 720,
                                        },
                                    }}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <h4>{producto.nom_juego}</h4>
                                <h3>S/ {producto.precio_juego}</h3>
                                <hr />
                                <p>{producto.desc_juego}</p>
                                <div className="d-flex">
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => {
                                            modificarCantidad(-1);
                                        }}
                                    >
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <h4 className="mx-2">{cantidad}</h4>
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => {
                                            modificarCantidad(1);
                                        }}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <br/>
                                    <button className="btn btn-outline-dark ms-3" >
                                        <i className="fas fa-cart-plus"></i> Añadir a carrito
                                    </button>
                                </div>
                                <button className="btn btn-outline-dark btn-lg mt-2" >
                                    Comprar ahora!
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </> 
      )
  }
  