import React from 'react'

export default function AdminView() {
    return (
        <div className="container d-flex align-items-center" style={{
            height: "100vw"
        }}>
            <div className="d-flex flex-column align-items-center " 
                style={{
                    width: "100vw"
                }}
            >
                <h3>
                    Administrador
                </h3>
                <div className='d-flex flex-column justify-content-start '>
                    <div className='row my-2'>
                        <div className='col-sm-6'>
                            <button className='btn-lg' style={{
                            width:"200px"
                        }}>
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
                            <button className='btn-lg' style={{
                            width:"200px"
                        }}>
                                Venta Juegos
                            </button>
                        </div>
                        
                        <div className='col-sm-6'>
                            <button className='btn-lg' style={{
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
