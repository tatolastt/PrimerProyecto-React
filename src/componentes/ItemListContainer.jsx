import ItemList from "./ItemList"
import "../css/itemListContainer.css"


function ItemListContainer({saludo, data}) {

  return (
    <div>
      <h2 className="tituloProductos">{saludo}</h2>
      <div className="itemMio">
        {data.map((celular) => {
          return (
            <ItemList imagen={celular.imagen} producto={celular.nombre} precio={"$" + celular.precio}  key={celular.nombre}/>
          )
        })}
      </div>

    </div>
    
  )
}

export default ItemListContainer