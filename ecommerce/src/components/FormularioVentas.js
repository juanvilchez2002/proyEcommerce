import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuegoPorId } from "../services/ventasService";
import {obtenerEstado, obtenerEstadoPorId} from "../services/estadoServices"
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import EstadosVentas from "./EstadosVentas";

export default function FormularioVentas() {

    //se crea un estado donde se almacenara los datos de venta
    const [value, setValue]=useState({
        nombreCompleto: "",
        telefono: "",
        email: "",
        provincia: "",
        distrito: "",
        direccion: "",
        coordenadas: [],
        juegos: [],
        total: 0,
        estado_id: ""
    })

    //estado actual de venta del pedido
    const [estado, setEstado] = useState();

    //estados de venta
    const [estadoP, setEstadoP] = useState([]);

    //usamos useParams para obtener el id de la 
    //venta a consultar
    const {id} = useParams();

    //consultadmos la venta por id
    const getVentas = async() =>{
        try {
            const ventaObt = await obtenerJuegoPorId(id);
            setValue(ventaObt);
            //todos los estados
            const estadoObt = await obtenerEstado();
            setEstadoP(estadoObt);
            //console.log(estadoP)

            //el estado de la venta
            const estadoOb = await obtenerEstadoPorId(ventaObt.estado_id);            
            setEstado(estadoOb.nombre);
            //console.log(estado)
        } catch (error) {
            console.log("error")
        }
    }

    //para calcular el monto total a pagar
    let total = 0;

    total = value["juegos"].reduce((acum, prod) => {
        return acum + prod.cantidad*prod.precio
    },0)

    //actualizar el estado de la compra
    const actualizarInput = (e)=>{
        console.log(e, e.target.name, e.target.value);
        //usando el setValue para actualizar
        //pasamos un objeto y spread de value que
        //es un objeto
        setValue({
            ...value,
            //pasamos el nombre y el valor
            [e.target.name]: e.target.value,
        });
    }

    useEffect(()=>{
        getVentas()
    },[])

    return (
        <div className="container">
            <div>
                <h3>

                    Estado de Compra - <small style={{
                                            color:"red"
                                        }}
                                        >
                                            {
                                                estado
                                            }
                                        </small>
                </h3>
            </div>
            <form >
                <div className="d-flex flex-wrap">
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                            <label className="form-label">
                                Cliente: 
                            </label>
                            <input
                                type="text"
                                className="form-control" 
                                name="nombreCompleto" 
                                value={value.nombreCompleto}
                                disabled
                            />
                    </div>
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                            <label className="form-label">
                                Telefono de Contacto: 
                            </label>
                            <input
                                type="text"
                                className="form-control" 
                                name="telefono" 
                                value={value.telefono}
                                disabled
                            />
                    </div>
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                            <label className="form-label">
                                Estado de la Compra: 
                            </label>
                            <select                            
                                className="form-select"
                                name="estado_id"
                                value={value.estado_id}
                                onChange={(e)=>{
                                    actualizarInput(e)
                                }}
                            >
                                
                                {
                                    estadoP.map((est,i)=>(
                                        <option value={est.id} key={i}>
                                            {est.nombre}
                                        </option>
                                    ))
                                }
                        

                            </select>
                            
                            

                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                        <label className="form-label">
                            Correo de Contacto: 
                        </label>
                        <input
                            type="text"
                            className="form-control" 
                            name="email" 
                            value={value.email}
                            disabled
                        />
                    </div>
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                        <label className="form-label">
                            Provincias: 
                        </label>
                        <input
                            type="text"
                            className="form-control" 
                            name="departamento" 
                            value={value.departamento}
                            disabled
                        />
                    </div>                
                </div>
                <div className="d-flex flex-wrap">
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                        <label className="form-label">
                            Provincia: 
                        </label>
                        <input
                            type="text"
                            className="form-control" 
                            name="provincia" 
                            value={value.provincia}
                            disabled
                        />
                    </div>
                    <div className="m-2 col-md-3 d-flex flex-column flex-wrap">
                        <label className="form-label">
                            Direccion: 
                        </label>
                        <input
                            type="text"
                            className="form-control" 
                            name="direccion" 
                            value={value.direccion}
                            disabled
                        />
                    </div>                
                </div>

                <div>
                    <h4 className="m-2">
                        Listado de Juegos por Comprar
                    </h4>
                    {
                        //mostrar los juegos que ha seleccionado
                    }
                    <ul className="list-group">
                        {

                            value["juegos"].map((val, i) =>(
                                <li 
                                    className='list-group-item  d-flex justify-content-between col-6 m-2' 
                                    key={i} 
                                >
                                    <div>
                                        <h6 className='fw-bold'>
                                            {val.nombre}
                                        </h6>
                                        <small>
                                            Cantidad: {val.cantidad}
                                        </small>
                                    </div>
                                    <div className='badge bg-dark rounded-pill p-4'>
                                        S/. {(val.precio * val.cantidad).toFixed(2)}
                                    </div>
                                </li>        
                            ))
                                
                        }
                                <li className='list-group-item  d-flex justify-content-between col-6 m-2'>
                                    <span className='fw-bold'>
                                        TOTAL:
                                    </span>
                                    <span>
                                        S/.
                                        {
                                            total.toFixed(2)
                                        }
                                    </span>
                                </li>

                    </ul>

                </div>
                

            </form>
        </div>
    )
}
