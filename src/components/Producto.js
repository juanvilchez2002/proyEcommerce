

import img3 from "../assets/vj2.jpg"

export default function Producto() {
    return (
            <div className="card mb-3" >
  <div className="row g-">
    <div className="col-md-4">
      <img src={img3} className="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
        </div>
    )
}
