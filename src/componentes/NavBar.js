
import CardWidget from "./CardWidget";

function NavBar() {
  return (
    <header>
        <nav className="navMio">
            <div>
                <ul>
                    <li><a href="#">inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Nuestros Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <CardWidget/>
                </ul>

            </div>
            
        </nav>
        
    </header>
  )
}



export default NavBar;