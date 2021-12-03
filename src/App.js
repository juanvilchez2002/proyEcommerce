import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarritoContextProvider from "./context/carrito";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductoId from "./components/detalledeProducto/ProductoId";
import Busqueda from "./components/busqueda/Busqueda";

import Header from "./components/Header/Header";
import Inicio from "./views/Inicio";
import Tienda from "./views/Tienda";
import Noticias from "./views/Noticias";
import AcercaDe from "./views/AcercaDe";
import Carrito from "./views/carrito";
import FinalizarCompra from "./views/finalizar-compra/index.jsx";
import Footer from "./components/footer";
import NotFound from "./views/NotFound";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <CarritoContextProvider>
      <Router>
        <Header />

        <div className="app">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/acercade" element={<AcercaDe />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/finalizar-compra" element={<FinalizarCompra />} />
            <Route path="/detalle/:id" element={<ProductoId />} />
            <Route path="/:busqueda" element={<Busqueda />} />
            <Route path="/search/:busqueda" element={<Busqueda />} />
          </Routes>
        </div>
        <Footer />

        <ToastContainer />
      </Router>
    </CarritoContextProvider>
  );
}
