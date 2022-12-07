import carrito from "../imagenes/carrito.png"
import "../css/cardWidget.css"

function CardWidget() {
  return (
    <a href="#" className="carrito">
        <img src={carrito}  className="carritoLogo" alt="carrito" />
        <p className="carritoTexto">2</p>
    </a>
  )
}

export default CardWidget