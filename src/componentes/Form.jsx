import React from 'react'

function Form(carrito) {
    const createOrder = (e) => {
        e.preventDefault();
    }

  return (

    
    <div>
        <form onSubmit={createOrder}>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre"></input>
            <label>Apellido</label>
            <input type="text" placeholder="Apellido"></input>
            <label>Telefono</label>
            <input type="text" placeholder="Telefono"></input>
            <label>direccion</label>
            <input type="text" placeholder="Direccion"></input>
        </form>

    </div>
  )
}

export default Form