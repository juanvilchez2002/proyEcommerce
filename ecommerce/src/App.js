import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Inicio from "./components/inicio/Inicio"
import Tienda from "./components/tienda/Tienda"
import Noticias from "./components/noticias/Noticias"
import AcercaDe from "./components/acercade/AcercaDe"
import Logearse from "./components/logeo/Logearse"
import { AuthContextProvider } from "./context/authContext"
import PrivateRoute from "./components/logeo/PrivateRoute"

export default function App() {


  return (
  <AuthContextProvider>
    <Router>
        <Routes>
          <Route path="/inicio" element={
            <PrivateRoute>
              <Inicio />
            </PrivateRoute>} />
          <Route path="/" element={<Logearse/>}/>
          <Route path="/tienda" element={
          <PrivateRoute>
          <Tienda/>
          </PrivateRoute>  } />
          <Route path="/noticias" element={
          <PrivateRoute>
            <Noticias />
            </PrivateRoute>} />
          <Route path="/acercade" element={
          <PrivateRoute>
            <AcercaDe />
            </PrivateRoute>} />
        </Routes>
    </Router>
  </AuthContextProvider>
      
  )
}

