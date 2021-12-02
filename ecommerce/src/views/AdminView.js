import { useNavigate } from "react-router-dom";

export default function AdminView() {

    const navigate = useNavigate()

    //
    const listadoJuego = ()=>{
        navigate("/listajuegos")
    }

    //
    const listadoVentas = ()=>{
        navigate("/ventasJuegos")
    }

    return (
        <div className="d-flex align-items-center admin" style={{
            height: "100vh",
            color:"white"
        }}>
            <div className="d-flex flex-column align-items-center" 
                style={{
                    width:"100vw"
                }}
            >
                <h3>
                    Administrador
                </h3>
                <div className='d-flex flex-column justify-content-start '>
                    <div className='row my-2'>
                        <div className='col-sm-6'>
                            <button className='btn-lg' 
                                style={{
                                    width:"200px"
                                }}
                                onClick={
                                    listadoJuego
                                }
                            >
                                Listado de Juegos
                            </button>
                        </div>
                        
                        <div className='col-sm-6'>
                            <button className='btn-lg' style={{
                            width:"200px"
                        }}>
                                Registrar Juegos
                            </button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6'>
                            <button 
                                className='btn-lg'
                                style={{
                                    width:"200px"
                                }}
                                 
                                onClick={
                                    listadoVentas
                                }
                            >
                                Venta Juegos
                            </button>
                        </div>
                        
                        <div className='col-sm-6'>
                            <button className='btn-lg btn-dark' style={{
                            width:"200px"
                        }}>
                                Salir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
