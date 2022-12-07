import '../css/header.css';

function header() {
  return (
    <div>
        <header className="headerMio">
            <h1 className="tituloTienda">CeluTienda</h1>
            <button className="botonComprar">Comprar Ya!</button>
        </header>
    </div>
  )
}

export default header