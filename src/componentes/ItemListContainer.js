import Card from "./Card"
import "../css/itemListContainer.css"
import imagenIphone from "../imagenes/iphone13.jpg"
import s22 from "../imagenes/s22.webp"
import edge30 from "../imagenes/moto30pro.png"

function ItemListContainer({saludo}) {
  return (
    <div>
      <h2 className="tituloProductos">{saludo}</h2>
      <div className="itemMio">
        <Card imagen={imagenIphone} producto="Iphone 13" precio = "$700" />
        <Card imagen={s22} producto="Galaxy s22" precio = "$600" />
        <Card imagen={edge30} producto="Motorola Edge 30 Pro" precio = "$500" />
      </div>

    </div>
    
  )
}

export default ItemListContainer