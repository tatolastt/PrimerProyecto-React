import './css/navBar.css';
import './app.css';
import NavBar from './componentes/NavBar';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListContainer';
import {Routes, Route} from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail';
import Cart from './componentes/Cart';
// 
import {useState, useEffect} from "react"
import { useContext } from 'react';
import Contacto from './componentes/Contacto';

import { db } from './db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import { CartContextProvider } from './context/CartContext';




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


    // localStorage.getItem
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
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={ <div> <Header/> </div>}/>
          <Route path="/nuestrosProductos" element={<ItemListContainer saludo="Estos son tus productos" data={listCelular}/>}/>
          <Route path="/nuestrosProductos/:nombre" element={<ItemDetail data={listCelular}/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
