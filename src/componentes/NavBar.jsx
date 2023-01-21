import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header>
        <nav className="navMio">
            <div>
                <ul>
                    <Link to="/" className="linkss"> 
                    <li><h3>inicio</h3></li>
                    </Link>
                    <Link to="/nuestrosProductos" className="linkss">
                    <li><h3>Nuestros Productos</h3></li>
                    </Link>
                    <Link to="/contacto" className="linkss">
                    <li><h3>Contacto</h3></li>
                    </Link>
                    <Link to="/carrito" className="linkss">
                      <CartWidget/>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
  )
}



export default React.memo(NavBar);