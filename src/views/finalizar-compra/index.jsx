import React, { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom"

import { toast } from "react-toastify";

import { formatoAPrecio } from '../../utilidades/set-precio'

import { CarritoContext } from "../../context/carrito";

import styles from './styles.module.scss'

export default function FinalizarCompra() {
    const { carrito, limpiarCarrito } = useContext(CarritoContext);
    const [subTotal, setSubTotal] = useState(0)
    const [user, setUser] = useState(true)
 
    const { eliminarProducto } = useContext(CarritoContext);

    useEffect(() => {
        let result = 0

        carrito.forEach((item) => {
            result = result + (item.cantidad * item.producto.precio_juego)
        });

        setSubTotal(result)
      }, [carrito])

    const eliminarDeCarrito = (index) => {
        eliminarProducto(index)

        toast.warn('Producto eliminado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {carrito.length ? (
                    <form className="col-12">
                        <div className="row">
                        <div className="col-4">
                            <h2 className="subtitulo-general mt-3">Finalizar compra</h2>
                            {user ? (
                                <section>
                                    <p className="text-muted">Datos de contacto</p>
                                    <div className="form-group mb-3">
                                            <input type="email" id="email" name="email" required placeholder="Correo electrónico" className="form-control py-3" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input type="number" id="celular" name="celular" required placeholder="Celular" className="form-control py-3" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <textarea id="observaciones" name="observaciones" required placeholder="Observaciones" className="form-control"></textarea>
                                        </div>
                                </section>) : (<p>Debe iniciar sesión para continuar finalizar su compra</p>)}
                            </div>
                            <div className="col-md-4">
                                {user ? (
                                <section className="mt-5">
                                    <p className="text-muted">Dirección de entrega</p>
                                    <div className="form-group mb-3">
                                            <input type="text" id="departamento" name="departamento" required placeholder="Departamento" className="form-control py-3" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input type="text" id="provincia" name="provincia" required placeholder="Provincia" className="form-control py-3" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input type="text" id="distrito" name="distrito" required placeholder="Distrito" className="form-control py-3" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input type="text" id="direccion" name="direccion" required placeholder="Dirección de envío" className="form-control py-3" />
                                        </div>
                                </section>) : (<p>Debe iniciar sesión para continuar finalizar su compra</p>)}
                            </div>

                            <div className="col-md-4">
                                {user ? (
                                <section className="mt-5">
                                    <p className="text-muted">Datos de pago</p>
                                    <section>
                                        <div className="form-group mb-3">
                                            <input type="number" id="nroTarjeta" name="nroTarjeta" required placeholder="Número de tarjeta" className="form-control py-3" />
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group mb-3">
                                                    <input type="text" id="fechaVencimiento" name="fechaVencimiento" required placeholder="F. vencimiento" className="form-control py-3" />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group mb-3">
                                                    <input type="text" id="ccv" name="ccv" required placeholder="CCV" className="form-control py-3" />
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-success btn-block w-100 py-3">
                                            Finalizar &nbsp;
                                            <i class="fas fa-location-arrow"></i>
                                        </button>
                                    </section>
                                </section>) : (<p>Debe iniciar sesión para continuar finalizar su compra</p>)}
                            </div>
                        </div>
                    </form>) : (
                    <div className="col-12 text-center carrito-vacio d-flex flex-column justify-content-center align-items-center">
                        <span className="icono-carrito-vacio">
                        <i class="fas fa-shopping-cart"></i>
                        </span>
                        <p>Aún no ha agregado productos a su carrito.</p>

                        <Link to="/tienda" className="btn btn-primary">
                            Ver productos &nbsp;
                            <i class="fab fa-telegram-plane"></i>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
