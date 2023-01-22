import carrito from "../imagenes/carrito.png"
import "../css/cartWidget.css"

import React from 'react'

import CartContext from '../context/CartContext';

function CartWidget() {

  const {cart} = React.useContext(CartContext)


  return (
    <div className="carrito">
        <img src={carrito}  className="carritoLogo" alt="carrito" />
        <p className="carritoTexto">0</p>
    </div>
  )
}

export default CartWidget;