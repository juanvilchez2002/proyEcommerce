import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import login from "../../assets/img/login.jpg"
import loginGoogle from "../../assets/img/login-google.png"
import "../../style/login.css"

export default function Logearse() {
    const {signIn,user} = useContext(AuthContext)

    const [ingresar,setIngresar] = useState()

    const acceder = () => {
        if(user !== null){
            setIngresar(<Link to="/inicio" className="btn btn-secondary">INGRESAR</Link>)
        }
    }

    useEffect(() => {
        return acceder()
    },[user])

    return (
        <div className="login-fondo">
            <div className="login">
                <div className="mb-4 text-white">
                <h6 className="ms-4">BIENVENIDOS A</h6>
                <h4 className="text-warning">PALACE GAMES</h4>
                </div>
                <img src={login} alt="login" style={{
                                                    width:"150px",
                                                    borderRadius:"100px"}}/>
                <img src={loginGoogle} alt="login" className="btn ms-2" onClick={signIn} style={{
                                height:"100px"}}/>
                <>{ingresar}</>
            </div>
        </div>
    )
}
