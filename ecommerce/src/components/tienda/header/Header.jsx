import "../../../style/header.css"
import logo from "../../../assets/img/logo.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../context/authContext"


export default function Header() {
	const {signOut} = useContext(AuthContext)

return (
    <header className="sticky-top">
        <nav className="navbar navbar-expand-md navbar-dark nav">
            <div className="container-fluid justify-content-center row">
                <img className="col-xs-6 col-sm-7 col-md-3 col-lg-3 ms-2" src={logo} alt="logo"/>
			    <button 
				className="navbar-toggler ms-3"
				data-bs-toggle="collapse"
				data-bs-target="#links"
			    >
				    <span className="navbar-toggler-icon" />
			    </button>
			    <div className="mt-2 col-xs-8 col-sm-8 col-md-5 col-lg-5 collapse navbar-collapse justify-content-center" id="links">
				    <ul className="navbar-nav text-center">
						<Link to="/inicio" className="navbar-item ms-3 text-white text-decoration-none">
						INICIO
						</Link>
						<Link to="/tienda" className="navbar-item ms-3 text-warning text-decoration-none">
						TIENDA
						</Link>
						<Link to="/noticias" className="navbar-item ms-3 text-white text-decoration-none">
						NOTICIAS
						</Link>
						<Link to="/acercade" className="navbar-item ms-3 text-white text-decoration-none">
						ACERCA DE
						</Link>
						
				    </ul>
			    </div>
				<div className="col-xs-8 col-sm-12 col-md-3 col-lg-3 mt-2 move">
				    <input type="search" class="form-control ms-2" placeholder="Buscar..."/>
					<i className="bi bi-search lupa mt-2 ml-3"/>
                </div>
				<div className="d-flex col-xs-8 col-sm-12 col-md-1 col-lg-1 justify-content-center ms-2">
			        <i className="bi bi-cart3 text-white ms-2" style={{fontSize:"30px"}}/>
					<i className="bi bi-door-closed text-danger ms-3 mt-1" onClick={signOut} style={{fontSize:"25px"}}></i>
			    </div>
			</div>
        </nav>
    </header>
    )
}
