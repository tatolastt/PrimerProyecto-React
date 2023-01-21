import './css/navBar.css';
import './app.css';
import NavBar from './componentes/NavBar';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListContainer';
import {Routes, Route} from 'react-router-dom';
import Description from './componentes/Description';
// 
import imagenIphone from "./imagenes/iphone13.jpg"
import s22 from "./imagenes/s22.webp"
import edge30 from "./imagenes/moto30pro.png"
import {useState, useEffect } from "react"
import Contacto from './componentes/Contacto';

import { db } from './db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';


function App() {

  const productosCollectionRef = collection(db, "productos");

  const [listCelular, setListCelulares] = useState([]);

  const [loading, setLoading] = useState(true);


  const getProducts = async () => {
    const data = await getDocs(productosCollectionRef); //pedir los productos //getDocs pide los productos de la coleccion
    setListCelulares(data.docs.map(doc => ({...doc.data(), id: doc.id}))); //setear los productos
    setLoading(false);
  }


  useEffect(() => {
    getProducts();
  },[]);

  //CARGANDO

  if (loading) {
    return (
      <div class="loading">
        <div class="cargando">
          <div class="pelotas"></div>
          <div class="pelotas"></div>
          <div class="pelotas"></div>
          <span class="texto-cargando">Cargando...</span>
        </div>
    </div>
    )
  }

  //Pagina original 


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={ <div> <Header/> </div>}/>
        <Route path="/nuestrosProductos" element={<ItemListContainer saludo="Estos son tus productos" data={listCelular}/>}/>
        <Route path="/nuestrosProductos/:nombre" element={<Description data={listCelular}/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
    </div>
  );
}

export default App;
