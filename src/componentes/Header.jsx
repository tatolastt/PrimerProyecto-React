import '../css/header.css';
import { Link } from "react-router-dom";

function header() {
  return (
    <div>
        <header className="headerMio">
            <h1 className="tituloTienda">CeluTienda</h1>
            <Link to="nuestrosProductos">
            <button className="botonComprar">Comprar Ya!</button>
            </Link>
            
        </header>
    </div>
  )
}

export default header