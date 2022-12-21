import '../css/description.css';
import { useParams } from "react-router-dom";



function Description( {data}) {

    let {nombre} = useParams();

    const item = data.find((item) => item.nombre === nombre)


  return (
    <>
       <div className="cardProducto">
        <img src={item.imagen} alt="imagen celular"></img>
        <h2>{item.nombre}</h2>
        <p>{item.precio}</p>
        <button>Comprar</button>
       </div>
    </>
  )
}

export default Description;