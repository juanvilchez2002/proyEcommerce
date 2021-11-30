//importaremos datos de mockapi
import axios from "axios";
//import { storage } from "../config/Firebase";


//variable que almacena la URL de mockapi
const URL = `${process.env.REACT_APP_API}juego`;

const obtenerJuegos = async() =>{
    try {
        //creamos una variable q recibira la URL
        const {data} = await axios.get(URL)
        return data;
    } catch (error) {
        throw error;
    }
};


export {
    obtenerJuegos
}