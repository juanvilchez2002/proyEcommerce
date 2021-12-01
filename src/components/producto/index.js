import React, { useContext } from "react";

import { toast } from "react-toastify";

import { CarritoContext } from "../../context/carrito";

export default function Producto({ prod }) {
  const { anadirACarrito } = useContext(CarritoContext);

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
      cantidad: 1,
      producto: {
        ...prod,
      },
    };
    anadirACarrito(nuevoProducto);
  };

  const recortarDescripcion = (texto) => {
    let limite = 130;
    return texto.length >= limite ? `${texto.slice(0, limite)}...` : texto;
  };

  return (
    <div className="card text-center bg-dark ">
      <img src={prod.img_juego} alt={prod.nom_juego} className="img-titulo" />
      <div className="card-body text-light card-cont">
        <h4 className="card-title">{prod.nom_juego}</h4>
        <p className="small text-secondary">
          {recortarDescripcion(prod.desc_juego)}
        </p>
        <div className="d-flex justify-content-center">
          <a
            href=""
            className="btn btn-outline-secondary rounded-0"
            onClick={(e) => anadirACarritoContext(e)}
          >
            COMPRAR
          </a>
          <h3 className="ms-4 text-secondary">
            S/ {prod.precio_juego.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}
