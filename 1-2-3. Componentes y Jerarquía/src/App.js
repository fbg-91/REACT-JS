import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/ComponenteA';

function App() {

  const defaultContact = {
    nombre: 'Fernando',
    apellido: 'Barroso',
    email: 'fbg.91@hotmail.com',
    conectado: false
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={ defaultContact } />
      </header>
    </div>
  );
}

export default App;
