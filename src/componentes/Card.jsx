import { Link, useLocation } from "react-router-dom";
import "../css/card.css"

function Card({imagen, producto, precio}) {
  const path = useLocation().pathname;
  return (
    <div>
        <div className="card  text-center cardMio">
          <Link to={`${producto}`}>
            <img src={imagen} className="card-img-top" alt="fotocelu"/>
            <div className="card-body cardMioBody">
                <h5 className="card-title">{producto}</h5>
                <p className="card-text">{precio}</p>
                {path === "/nuestrosProductos" ? ( <a href="#" className="btn btn-primary">Ver producto</a>) : ( <a href="#" className="btn btn-primary">Comprar </a>) }
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Card;