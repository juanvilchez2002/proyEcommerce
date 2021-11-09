import "../../style/Header.css"
import logo from "../../assets/img/logo.png"


export default function Header() {
    return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid justify-content-center row">
            <img className="col-lg-3 col-sm-8 ms-2" src={logo} alt="logo" />
			<button 
				className="navbar-toggler ms-3"
				data-bs-toggle="collapse"
				data-bs-target="#links"
			    >
				<span className="navbar-toggler-icon" />
			</button>
			<div className="mt-2 col-lg-5 collapse navbar-collapse justify-content-center" id="links">
				<ul className="navbar-nav text-center" id="ul">
					<li className="navbar-item ms-3 text-warning">
						INICIO
					</li>
					<li className="navbar-item ms-3 text-white">
						TIENDA
					</li>
					<li className="navbar-item ms-3 text-white">
						NOTICIAS
					</li>
                    <li className="navbar-item ms-3 text-white">
						ACERCA DE
					</li>
				</ul>
			</div>
			<div className="col-lg-3 col-sm-12 mt-2 move">
				    <input type="search" class="form-control ms-2" placeholder="Buscar..."/>
					<i className="bi bi-search lupa mt-2 ml-3"/>
                </div>
            </div>
        </nav>
    </header>
    )
}
