import { useState } from 'react';
import './App.css';

import ViewSolicitarRecomendacao from './views/solicitarRecomendacao';
import ViewLogin from './views/Login';
import ViewCadastro from './views/Cadastro';

function App() {
  // Verifica se já existe sessão salva no localStorage
  const usuarioSalvo = JSON.parse(localStorage.getItem('fygame_logado') || 'null');

  const [tela, setTela] = useState(usuarioSalvo ? 'app' : 'login');
  const [usuario, setUsuario] = useState(usuarioSalvo);
  const [jogos, setJogos] = useState({ jogo1: '', jogo2: '', jogo3: '' });

  function handleLogin(user) {
    setUsuario(user);
    setTela('app');
  }

  function handleCadastro(user) {
    setUsuario(user);
    setTela('app');
  }

  function handleLogout() {
    localStorage.removeItem('fygame_logado');
    setUsuario(null);
    setTela('login');
  }

  function enviarForm(event) {
    event.preventDefault();
    console.log('Jogos informados:');
    console.log('Jogo 1:', jogos.jogo1);
    console.log('Jogo 2:', jogos.jogo2);
    console.log('Jogo 3:', jogos.jogo3);
  }

  if (tela === 'login') {
    return (
      <ViewLogin
        onLogin={handleLogin}
        irParaCadastro={() => setTela('cadastro')}
      />
    );
  }

  if (tela === 'cadastro') {
    return (
      <ViewCadastro
        onCadastro={handleCadastro}
        irParaLogin={() => setTela('login')}
      />
    );
  }

  return (
    <div>
      <header className="app-header">
        <div className="app-header-logo">
          <span>🎮</span> FyGame
        </div>
        <div className="app-header-user">
          <span className="app-header-nome">Olá, {usuario?.nome || 'Jogador'}!</span>
          <button className="app-header-logout" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </header>
      <ViewSolicitarRecomendacao enviarForm={enviarForm} />
    </div>
  );
}

export default App;
