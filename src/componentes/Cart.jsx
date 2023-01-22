import React from 'react'
import { useContext, useState, useEffect } from 'react';
import CartContext from '../context/CartContext';
import "../css/cart.css"
import Form from './Form';


function Cart() {
    const {cart,RemoveCart,getLocalStorage,setCart} = useContext(CartContext)
    const [continuar, SetContinuar] = useState(false);
    

    const handleVaciar = () => {
        RemoveCart()
        SetContinuar(false)
    }

    const HandleContinue = () => {
        SetContinuar(true)
    }


    useEffect(() => {
        const cart = getLocalStorage()
        setCart(cart);
    }, [])

    

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
            {cart.map((item,i) => {
            return (
                <div className='cuadroProductos' key={i}>
                    <p>{item.nombre}</p>
                    <p>${item.precio}</p>
                </div>
            )
            
        })}
        <div className='botones'>
            <button className='botonVaciar' onClick={handleVaciar}>Vaciar Carrito</button>
            <button className='botonContinuar' onClick={HandleContinue}>continuar compra</button>
        </div>
        {continuar && <Form/>}
    </div>
)
}

export default Cart