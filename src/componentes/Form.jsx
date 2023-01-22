import React from 'react'
import { useState, useContext } from 'react';
import "../css/form.css"
import CartContext from '../context/CartContext';
import swal from 'sweetalert';
import {collection , addDoc} from 'firebase/firestore';
import { db } from '../db/firebase-config';





function Form(carrito) {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const {RemoveCart, cart} = useContext(CartContext)



  const createOrder = (e) => {
    e.preventDefault();
  
  
    if([nombre, apellido, telefono, direccion].includes("")){
      // alert("Todos los campos son obligatorios");
      return("LLene todos los campos");
    }
    else{

      let carrito = cart.map((item) => {
        return {
          nombre: item.nombre.toString()
        }
      })

      let Comprador = {
        nombre,
        apellido,
        telefono,
        direccion,
        carrito
      }
      
      const clientesColecctionRef = collection(db, "Ventas");

      addDoc(clientesColecctionRef, Comprador)
      




      swal("Compra realizada con exito", "Gracias por su compra ", "success")
      console.log(nombre, apellido, telefono, direccion);
      console.log("Formulario Enviado");
      console.log(Comprador)
      RemoveCart();
      
    }

    
  
    // objeto de alumno

    // const objetoAlumno = {
    //   nombre,
    //   clase,
    //   email,
    //   fecha,
    //   datos,
    // }

    //reiniciar el formulario
    setNombre("");
    setApellido("");
    setTelefono("");
    setDireccion("");
  }

  


  return (
    <div>
        <form  className="formBuy" onSubmit={createOrder}>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}></input>
            <label>Apellido</label>
            <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} ></input>
            <label>Telefono</label>
            <input type="text" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} ></input>
            <label>Direccion</label>
            <input type="text" placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)}></input>
            <button className="botonFinalizarCompra" type='submit'>Finalizar Compra</button>
            {
              (nombre, apellido, telefono, direccion) === "" ? <p>LLene todos los campos</p> : null
            }
        </form>
        
    </div>

    
  )
}

export default Form