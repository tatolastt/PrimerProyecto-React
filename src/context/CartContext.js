import React from "react";

import { useState } from "react";

import "../css/cart.css"



//se debe exportar el contexto para que pueda ser usado en los componentes en los que esta rodeado en el return del app
const Context = React.createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //estado del carrito


    //recoger todos los productos del local storage
    const getLocalStorage = () => {
        let cartLS = localStorage.getItem("cart");
        if(cartLS === null){
            return [];
        }else{
            return JSON.parse(cartLS);
        }
    }

    const AddItem = (item) => {

        
        //guardar en el local storage
        let cartLS = getLocalStorage();
        cartLS.push(item);
        localStorage.setItem("cart", JSON.stringify(cartLS));
        setCart(cartLS);
        
    }

    const RemoveCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    }
    

    //funcion que me devuelva cuantos productos hay en el carrito
    const QuantityFunction = () => {
        let cantidad = 0;
        cart.forEach((cart, i) => {
            if(i === 0){
                cantidad = 1;
            }else{
                cantidad = cantidad + 1;
            }
        });
        return cantidad;
    };

    




    return(
        <Context.Provider value={{cart, setCart, AddItem,RemoveCart,QuantityFunction,getLocalStorage}}>
            {children}
        </Context.Provider>
    )
}



export default Context;