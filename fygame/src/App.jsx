import { useState } from 'react';
import './App.css';

import ViewSolicitarRecomendacao from "./views/solicitarRecomendacao";

function App() {
  const [jogos, setJogos] = useState({
    jogo1: '',
    jogo2: '',
    jogo3: ''
  });

  //Registra os valores do input no campo correspondente em 'jogos'
  const salvarInput = (e) => {
    const { name, value } = e.target; //name é o name do input && value é o value do input

    setJogos((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function GerarRecomendacao(event) {
    //Gerar recomendação com os jogos informados
    event.preventDefault();

    console.log('Jogos informados:');
    /*
    console.log('Jogo 1:', jogos.jogo1);
    console.log('Jogo 2:', jogos.jogo2);
    console.log('Jogo 3:', jogos.jogo3);
    */
    console.log('Jogos: ', jogos);
  }

  return (
    <div>
      <ViewSolicitarRecomendacao GerarRecomendacao={GerarRecomendacao} salvarInput={salvarInput} />
    </div>
  );
}

export default App;
