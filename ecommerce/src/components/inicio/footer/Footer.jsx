export default function Footer() {
    return (
          <footer className="text-white py-1 bg-black d-flex">
             <div className='container' >
                 <nav className="row d-flex justify-content-center">
                         <ul className='d-flex col-12 col-md-3 list-unstyled justify-content-center align-items-center'>
                              <li className='font-weigth-bold me-3'>Siguenos:</li>
                              <li className='d-flex justify-content-between'>
                                   <i className="bi bi-facebook me-4" style={{ 
                                   fontSize: "35px",
                                   cursor: "pointer"}}/>
                                   <i className="bi bi-instagram me-4 "style={{ 
                                   fontSize: "35px",
                                   cursor: "pointer"}}/>
                                   <i className="bi bi-twitter me-4"style={{ 
                                   fontSize: "35px",
                                   cursor: "pointer"}}/>
                              </li>
                         </ul>     
                    <p className="d-flex justify-content-center me-2">@Todos los derechos reservados 2021</p>
                 </nav>
             </div>
       </footer> 
    
    )
}