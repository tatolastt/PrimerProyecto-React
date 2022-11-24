
import './App.css';

//creacion componente 

function HelloComponent(props){
  return(
    <h1>Hola {props.name} estudiante de {props.carrera}</h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HelloComponent name="tato" carrera="react"/>
        </a>
      </header>
    </div>
  );
}

export default App;
