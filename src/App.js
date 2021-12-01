import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarritoContextProvider from "./context/carrito";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductoId from "./components/detalledeProducto/ProductoId";
>>>>>>> c43c42150f501cab1ed8bcbbdb3c299e8d4b0b22

import Header from "./components/Header/Header";
import Inicio from "./views/Inicio";
import Tienda from "./views/Tienda";
import Noticias from "./views/Noticias";
import AcercaDe from "./views/AcercaDe";
import Carrito from "./views/carrito";
import Footer from "./components/footer";

export default function App() {
  return (
    <CarritoContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <Footer />

        <ToastContainer />
      </Router>
    </CarritoContextProvider>
  );
}
