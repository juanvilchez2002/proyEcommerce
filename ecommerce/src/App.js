import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";//importando libreria de BootStrap
import "./css/styles.css"
import {BrowserRouter as Routers, Route, Routes} from "react-router-dom";
import Login from "./components/Login";

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
    </Routes>
  </Routers>
        
  )
}

export default App;
