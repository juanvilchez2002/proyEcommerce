import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { formatoAPrecio } from '../../utilidades/set-precio'

import styles from './styles.module.scss'

export default function Carrito() {
    const [carrito, setCarrito] = useState([
        {
            id: 1,
            producto: {
                id: 5,
                nombre: 'Videojuego de acción',
                descripcion: 'Videojuego de acción (Desc.)',
                precioReal: 5,
                precioDescuento: 3,
                imagen: 'https://firebasestorage.googleapis.com/v0/b/proyg5-2021.appspot.com/o/proyEcommerce%2F1_p.png?alt=media&token=044cfa88-5608-43ff-8573-174feee3bcbb'
            },
            cantidad: 3
        },
        {
            id: 2,
            producto: {
                id: 3,
                nombre: 'Videojuego de aventura',
                descripcion: 'Videojuego de aventura (Desc.)',
                precioReal: 10,
                precioDescuento: 5,
                imagen: 'https://firebasestorage.googleapis.com/v0/b/proyg5-2021.appspot.com/o/proyEcommerce%2F2_p.png?alt=media&token=80cdcbc5-df3e-4860-bd6a-a16699fb9460'
            },
            cantidad: 5
        },
        {
            id: 3,
            producto: {
                id: 5,
                nombre: 'Videojuego de estrategia',
                descripcion: 'Videojuego de estrategia (Desc.)',
                precioReal: 5,
                precioDescuento: null,
                imagen: 'https://firebasestorage.googleapis.com/v0/b/proyg5-2021.appspot.com/o/proyEcommerce%2F4_p.png?alt=media&token=3a09fd56-94d6-4d75-8b87-f7435fc3da64'
            },
            cantidad: 3
        }
    ])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 pt-0">
                    <h2 className="subtitulo-general">Carrito <span className="text-muted">(3 productos)</span></h2>

                    {/* Producto */}
                    <section>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-8">
                                    { carrito.map((item, i) => {
                                        return  (
                                            <div className={`${styles.card} row mb-5 py-3`} key={i}>
                                                <div className="col-md-3">
                                                    <div style={{backgroundImage: `url(${item.producto.imagen})`}} className={`${styles.cardImagen}`}>
                                                        {/* <img src={item.producto.imagen} alt="" className="img-fluid" /> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-9 text-left">
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <h3 className="small">{item.producto.nombre}</h3>
                                                            <p className="small text-muted">{item.producto.descripcion}</p>
                                                        </div> 

                                                        <div className="col-md-3">
                                                            Cantidad: { item.cantidad }
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <div>
                                                                {item.producto.precioDescuento ? (<h4 className={`${styles.precio} text-danger`}>
                                                                    <span>{formatoAPrecio(item.producto.precioDescuento)}</span>
                                                                    <span className="small">(Oferta)</span>
                                                                </h4>) : ''}
                                                                {item.producto.precioReal && item.producto.precioDescuento ? (<h4 className={`${styles.precio}`}><span>{formatoAPrecio(item.producto.precioReal)}</span></h4>) : ''}
                                                            </div>

                                                            {item.producto.precioReal && !item.producto.precioDescuento ? (<h4 className={`${styles.precio}`}><span>{formatoAPrecio(item.producto.precioReal)}</span></h4>) : ''}
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col">
                                                            <button type="button" className={`${styles.btnDelete} border-0 mt-5`}>Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) }
                                </div>

                                <div className="col-md-4">
                                    <div className="card mt-0">
                                        <div className="card-body">
                                            <h4>Resumen de tu orden</h4>

                                            <p className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
                                                <span className="small text-muted">Sub-total productos</span>
                                                <span>S/ 131.27</span>
                                            </p>

                                            <p className={`${styles.message}`}>El costo de despacho no está incluido en el precio</p>

                                            <Link to="/" className="btn btn-success w-100 mt-3">
                                                FINALIZAR COMPRA &nbsp;
                                                <i class="fas fa-location-arrow"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
