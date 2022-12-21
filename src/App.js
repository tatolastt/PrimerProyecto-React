import './css/navBar.css';
import NavBar from './componentes/NavBar';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListContainer';
import {Routes, Route, Navigate} from 'react-router-dom';
import Description from './componentes/Description';
// 
import imagenIphone from "./imagenes/iphone13.jpg"
import s22 from "./imagenes/s22.webp"
import edge30 from "./imagenes/moto30pro.png"
import {useState} from "react"



function App() {

  const [listCelular, setListCelulares] = useState([
    { nombre: "Iphone 13", precio: "$700", imagen: imagenIphone},
    { nombre: "Galaxy s22", precio: "$600", imagen: s22},
    { nombre: "Motorola Edge 30 Pro", precio: "$500", imagen: edge30}
  ]);


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <div> <Header/> </div>}/>
        <Route path="/nosotros" element={<h2>Conocenos</h2>}/>
        <Route path="/nuestrosProductos" element={<ItemListContainer saludo="Estos son tus productos" data={listCelular}/>}/>
        <Route path="/nuestrosProductos/:nombre" element={<Description data={listCelular}/>}/>
        <Route path='*' element={<h2>No esta hecho esa pagina todavia</h2>}/>
      </Routes>
    </div>
  );
}

export default App;
