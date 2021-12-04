import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";//importando libreria de BootStrap
import "./css/styles.css";
import {BrowserRouter as Routers, Route, Routes} from "react-router-dom";
import VentasJuegosView from "./views/VentasJuegosView";
import ListaJuegosView from "./views/ListaJuegosView";
import Login from "./components/Login";
import AdminView from "./views/AdminView";
import FormularioVentas from "./components/FormularioVentas";
import RegistrarJuegosView from "./views/RegistrarJuegosView";
import EditarJuegosView from "./views/EditarJuegosView";
import EditarVentaJuegosView from "./views/EditarVentaJuegosView"

function App() {
  return (
      

      

  <Routers>
    {
          /**<div className="d-flex align-items-center justify-content-center">
          <Cards/>
        </div>*/
      }
    <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/login" element={<Login/>}/>     
      <Route path="/admin" element={<AdminView/>}/> 
      <Route path="/registrarJuego" element={<RegistrarJuegosView/>} />  
      
      <Route path="/editarJuego/:id" element={<EditarJuegosView/>}/>
      
      <Route path="/listajuegos" element={<ListaJuegosView/>}/>            
      <Route path="/ventasJuegos" element={<VentasJuegosView/>}/>       
      <Route path="/editarventas/:id" element={<EditarVentaJuegosView/>}/>
    </Routes>
  </Routers>
        
  )
}

export default App;
