import axios from "axios";

const obtenerProductos = async () => {
    const URL = "https://6195c89174c1bd00176c6e8e.mockapi.io/juego"
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}



const obtenerCategorias = async () => {
    const URL = "https://6195c89174c1bd00176c6e8e.mockapi.io/categoria_juego"
    try {
        const {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

export {obtenerProductos,obtenerCategorias}