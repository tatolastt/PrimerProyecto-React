import './css/navBar.css';
import NavBar from './componentes/NavBar';
import Header from './componentes/Header';
import ItemListContainer from './componentes/ItemListContainer';

//creacion componente 

// function HelloComponent(props){
//   return(
//     <h1>Hola {props.name} estudiante de {props.carrera}</h1>
//   );
// }

// //en vez de pedir un props se pide directamente con { } lo que uno quiere pedir
// function ComponenteConDeepMatching({saludo, despedida}){
//   return(
//     <h2>{saludo} y {despedida}</h2>
//   );
// }

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <ItemListContainer saludo="Estos son tus productos"/>
    </div>
  );
}

export default App;
