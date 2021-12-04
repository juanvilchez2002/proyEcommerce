//componente
import { useRef } from "react";

export default function FormularioJuego({value, actualizarInput, manejarSubmit, manejarImagen, categorias, ruta}) {
    
    //es una referencia
    //va a ser como trabajar como un id interno de 
    //react 
    const inputFile = useRef();

    console.log(value);

    /*
        todo input debe estar amarrado a un estado
        pero se creara un objeto para manejar todos 
        los input
    */
        let xxx = "http://localhost:3000/1e3ef1a6-6a53-4977-83b0-1ea5700fd015"
    return (
        <div>
            {/**
             *  el evento que envia los datos
             */}
            <form onSubmit={(e) =>{
                manejarSubmit(e);
            }}>
                
                <div className="mb-3">
                    <label className="form-label">
                        Nombre del Juego: 
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        name="nom_juego" 
                        value={value.nom_juego}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Descripción: 
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        name="desc_juego" 
                        value={value.desc_juego}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Stock: 
                    </label>
                    <input
                        type="number"
                        className="form-control" 
                        name="qty_juego" 
                        value={value.qty_juego}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Precio: 
                    </label>
                    <input
                        type="number"
                        className="form-control" 
                        name="precio_juego" 
                        value={value.precio_juego}
                        onChange={
                            (e)=>{
                                actualizarInput(e);
                            }
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Categoria:
                    </label>

                    <select
                        value={value.categoria_id}
                        className="form-select"
                        name="categoria_id"
                        onChange={(e)=>{
                            actualizarInput(e);
                        }}
                    >
                        {
                            categorias.map((cat, i)=>(
                                <option value={cat.id} key={i}>
                                    {cat.nombre}
                                </option>
                            ))
                        }
                    </select>
                </div>

                {/**
                 * para subir img
                 */}
                <div className="mb-3">
                    <label className="form-label">
                        Imagen:
                    </label>


                    {/*<input
                        type="file" 
                        className="form-control"
                        ref={inputFile}
                        onChange={(e)=>{
                            manejarImagen(e)
                        }}
                    />*/}


                    <input
                        type="file"
                        className="form-control"
                        ref={inputFile}
                        onChange={(e) => {
                            manejarImagen(e);
                        }}
                    />
                </div>
                <div>
                <img
                    src={ruta}
                />
                </div>    
                

                    <button 
                        className="btn btn-primary"
                        type="submit"
                    >
                        Guardar
                    </button>
            </form>
        </div>
    )
}
