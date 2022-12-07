import "../css/card.css"


function Card({imagen, producto, precio}) {
  return (
    <div>
        <div className="card cardMio">
            <img src={imagen} className="card-img-top" alt="fotocelu"/>
            <div className="card-body">
                <h5 className="card-title">{producto}</h5>
                <p className="card-text">{precio}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>
  )
}

export default Card;