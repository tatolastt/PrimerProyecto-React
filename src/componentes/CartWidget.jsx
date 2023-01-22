import carrito from "../imagenes/carrito.png"
import "../css/cartWidget.css"

import React from 'react'

import CartContext from '../context/CartContext';

function CartWidget() {

  const {QuantityFunction} = React.useContext(CartContext)


  return (
    <div className="carrito">
        <img src={carrito}  className="carritoLogo" alt="carrito" />
        
        {(QuantityFunction() > 0) && (<div className="carritoCantidad">{QuantityFunction()}</div>)}
    </div>
  )
}

export default CartWidget;