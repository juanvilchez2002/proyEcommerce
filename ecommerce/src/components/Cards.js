import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";//importando libreria de BootStrap

export default function Cards() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
            </div>
            
        </div>
    )
}
