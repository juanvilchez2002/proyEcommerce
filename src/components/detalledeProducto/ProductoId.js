import { obtenerProductosPorId, obtenerCategorias } from "../../services/Services"; 
import { toast } from "react-toastify";
import { useState, useEffect,useContext} from "react";
import { useParams,useNavigate } from "react-router";
import ReactImageMagnify from "react-image-magnify";
import {CarritoContext} from "../../context/carrito"
  
  export default function ProductoId() {

    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [categoria, setCategoria] = useState("");

    const { id } = useParams()

    const navigate = useNavigate();
    const { anadirACarrito } = useContext(CarritoContext);

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

    const anadirACarritoContext = (e) => {
        e.preventDefault();
        toast.success("Producto agregado", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const nuevoProducto = {
          cantidad,
          producto: {
            ...producto,
          },
        };
        anadirACarrito(nuevoProducto);
      };

      const anadirACarritoContext1 = () => {
          const nuevoProducto = {
            cantidad,
            producto: {
              ...producto,
            },
          };
          anadirACarrito(nuevoProducto);
      }

    const ejecutarComprarAhora = () => {
        anadirACarritoContext1();
        navigate("/carrito");
    };

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
                            <div id="detalle-view" className="col-12 col-md-6 detalle-view">
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
                                    <button className="btn btn-outline-dark ms-3" onClick={anadirACarritoContext} >
                                        <i className="fas fa-cart-plus"></i> Añadir a carrito
                                    </button>
                                </div>
                                <button className="btn btn-outline-dark btn-lg mt-2" onClick={ejecutarComprarAhora} >
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
  