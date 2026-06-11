import { useState } from 'react';
import './App.css';

import ViewSolicitarRecomendacao from "./views/solicitarRecomendacao";

function App() {
  const [jogos, setJogos] = useState({
    jogo1: '',
    jogo2: '',
    jogo3: ''
  });

  return (
    <div>
      <ViewSolicitarRecomendacao enviarForm={enviarForm()} />
    </div>
  );
}

function enviarForm(event) {
  event.preventDefault();

  console.log('Jogos informados:');
  console.log('Jogo 1:', jogo1);
  console.log('Jogo 2:', jogo2);
  console.log('Jogo 3:', jogo3);
}

export default App;
