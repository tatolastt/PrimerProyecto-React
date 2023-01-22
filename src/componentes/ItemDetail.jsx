import '../css/description.css';
import { useParams } from "react-router-dom";

import { useContext } from 'react';

import CartContext from '../context/CartContext';


function ItemDetail( {data}) {

  let {nombre} = useParams();

  const item = data.find((item) => item.nombre === nombre)

   const {AddItem, cart} = useContext(CartContext)

  console.log(cart)

  const handleOnAdd = () => {
    AddItem(item)

  }

  return (
    <>
       <div className="cardProducto">
        <img src={item.imagen} alt="imagen celular"></img>
        <h2>{item.nombre}</h2>
        <p>{item.precio}</p>
        <button onClick={handleOnAdd} >Comprar</button>
       </div>
    </>
  )
}

export default ItemDetail;