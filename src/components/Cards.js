import { useEffect, useState } from "react";
import { obtenerProductos, obtenerCategorias } from "../services/Services";

import Producto from "./producto";

export default function Cards() {
  const [productos, setProductos] = useState([]);

  const getData = async () => {
    try {
      const prodObtenidos = await obtenerProductos();
      setProductos(prodObtenidos);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {productos.map((prod, i) => (
          <div className="col-md-4" key={i}>
            <Producto prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}
