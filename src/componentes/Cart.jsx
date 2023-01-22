import React from 'react'
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';
import "../css/cart.css"

function Cart() {
    const {cart,RemoveCart} = useContext(CartContext)

    const handleVaciar = () => {
        RemoveCart()
    }

    

    if(cart.length === 0){
        return (
            <div className="cartContenedor">
                <h1>Cart</h1>
                <p>No hay productos en el carrito</p>
            </div>
        )
    }

    return (
        <div className="cartContenedor">
        <h1>Cart</h1>
            {cart.map((item) => {
            return (
                <div className='cuadroProductos'>
                    <p>{item.nombre}</p>
                    <p>${item.precio}</p>
                </div>
            )
            
        })}
        <button className='botonVaciar' onClick={handleVaciar}>Vaciar Carrito</button>


    </div>
)
}

export default Cart