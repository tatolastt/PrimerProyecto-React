import carrito from "../imagenes/carrito.png"
import "../css/cartWidget.css"

function CartWidget() {
  return (
    <div className="carrito">
        <img src={carrito}  className="carritoLogo" alt="carrito" />
        <p className="carritoTexto">2</p>
    </div>
  )
}

export default CartWidget;