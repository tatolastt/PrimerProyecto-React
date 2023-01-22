import '../css/itemDetail.css';
import { useParams } from "react-router-dom";

import { useContext, useState } from 'react';

import CartContext from '../context/CartContext';
import toast , { Toaster } from 'react-hot-toast';


function ItemDetail( {data}) {

  const [buy, setBuy] = useState(false)

  let {nombre} = useParams();

  const item = data.find((item) => item.nombre === nombre)

   const {AddItem, cart} = useContext(CartContext)

  console.log(cart)

  const handleOnAdd = () => {
    AddItem(item)

    setBuy(true)

    toast('Agregado Al Carrito', {
    icon: '👏',
    });


  }

  return (
    <>
       <div className="cardProducto">
        <img src={item.imagen} alt="imagen celular"></img>
        <h2>{item.nombre}</h2>
        <p>{item.precio}</p>
        {
          buy ? <p className='agregadoCarrito'>Agregado Al carrito</p> : <button onClick={handleOnAdd} >Comprar</button>
        }
       </div>
       <Toaster
          position="top-left"
          reverseOrder={false}
        />  
    </>
  )
}

export default ItemDetail;