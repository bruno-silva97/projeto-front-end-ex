import './App.css';
import MeuComponente from './MeuComponente';

function App() {
  return (
    <>
    <p id = 'primeiro'>nada</p>
    <p className = 'segundo'>Mais um teste</p>
    <MeuComponente 
      texto="Outro teste"
    />
    </>
  );
}

export default App;
