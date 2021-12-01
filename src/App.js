import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductoId from "./components/detalledeProducto/ProductoId";

import Header from "./components/Header/Header";
import Inicio from "./views/Inicio";
import Tienda from "./views/Tienda";
import Noticias from "./views/Noticias";
import AcercaDe from "./views/AcercaDe";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/detalle/:id" element={<ProductoId />} />
      </Routes>
      <Footer />
      </Router>
  );
}
