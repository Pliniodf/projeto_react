import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">

      <SayMyName nome="Plinio"/>
      <SayMyName nome="Joao"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="zezin" 
        idade="32" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"
        />

    </div>
  );
}

export default App;
