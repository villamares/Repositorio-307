import logo from './logo.svg';
import './App.css';
import ComponenteUno from './components/ComponenteUno';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteUno
          nombre="Adrian"
          apellido="Villamares"
          segundoApellido="Martinez"
          escuela="CECYTEM Tultutlan"
        />
      </header>
    </div>
  );
}

export default App;
