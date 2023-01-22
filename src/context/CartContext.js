import React from "react";

import { useState } from "react";

import "../css/cart.css"



//se debe exportar el contexto para que pueda ser usado en los componentes en los que esta rodeado en el return del app
const Context = React.createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //estado del carrito
    const [total, setTotal] = useState(0); //estado del total

    const AddItem = (item) => {

        setCart([...cart, item]);


    }

    const RemoveCart = () => {
        setCart([]);
    }

    const RemoveItem = (nombre) => {
        const itemFiltrados = cart.filter((item) => item.nombre !== nombre);
        setCart(itemFiltrados);
    }



    return(
        <Context.Provider value={{cart, setCart, AddItem,RemoveCart}}>
            {children}
        </Context.Provider>
    )
}

export default Context;