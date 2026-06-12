import { useState } from 'react';
import './App.css';

import ViewSolicitarRecomendacao from './views/solicitarRecomendacao';
import ViewLogin from './views/Login';
import ViewCadastro from './views/Cadastro';
import ViewJogoRecomendado from './views/jogoRecomendado';
import { GerarRecomendacao } from './services/GerarRecomendacao';

function App() {
  // Verifica se já existe sessão salva no localStorage
  const usuarioSalvo = JSON.parse(localStorage.getItem('fygame_logado') || 'null');

  const [tela, setTela] = useState(usuarioSalvo ? 'app' : 'login');
  const [usuario, setUsuario] = useState(usuarioSalvo);
  const [jogos, setJogos] = useState({ jogo1: '', jogo2: '', jogo3: '' });
  const [dadosRecomendacao, setDadosRecomendacao] = useState({
    Titulo: '',
    Genero: '',
    Descricao: '',
    Motivo: '',
    Link: '',
    LinkImagem: ''
  });
  const [carregando, setCarregando] = useState(false);

  //Login, Cadastro e Logout
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

  //Registra os valores do input no campo correspondente em 'jogos'
  const salvarInput = (e) => {
    const { name, value } = e.target; //name é o name do input && value é o value do input

    setJogos((prev) => ({
      ...prev,
      [name]: value
    }));
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

  if (tela === 'solicitarRecomendacao') {
    return (
      <ViewSolicitarRecomendacao
        ProcessarRecomendacao={ProcessarRecomendacao}
        salvarInput={salvarInput}
      />
    );
  }

  if (tela === 'jogoRecomendado') {
    return (
      <ViewJogoRecomendado
        Titulo={dadosRecomendacao.Titulo}
        Genero={dadosRecomendacao.Genero}
        Descricao={dadosRecomendacao.Descricao}
        Motivo={dadosRecomendacao.Motivo}
        Link={dadosRecomendacao.Link}
        LinkImagem={dadosRecomendacao.LinkImagem}
        usuario={usuario}
        handleLogout={handleLogout}
        irParaRecomendacao={() => setTela('solicitarRecomendado')}
      />
    );
  }

  async function ProcessarRecomendacao(event) {
    event.preventDefault();

    console.log("Botão clicado");
    const inicio = performance.now();
    const irParaJogoRecomendado = () => setTela('jogoRecomendado');
    
    try {
        setCarregando(true);
        const apiResposta = await GerarRecomendacao(
            jogos.jogo1,
            jogos.jogo2,
            jogos.jogo3
        );

        const fim = performance.now();
        console.log(`Tempo de resposta: ${((fim - inicio) / 1000).toFixed(2)} segundos`);

        setDadosRecomendacao(apiResposta);
        irParaJogoRecomendado();
    } catch (erro) {
        console.error(erro);
        setDadosRecomendacao({
            Titulo: 'Erro',
            Genero: '',
            Descricao: 'Erro ao gerar recomendação.',
            Motivo: '',
            Link: '',
            LinkImagem: ''
        });
    } finally {
        setCarregando(false);
    }
}

  return (
    <>
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

      {carregando && (
          <div className="loading-overlay">
              <div className="loading-card">
                  <div className="loading-spinner"></div>

                  <h2>Gerando recomendação...</h2>

                  <p>
                      A IA está procurando o jogo ideal para você.
                  </p>
              </div>
          </div>
      )}

      <ViewSolicitarRecomendacao ProcessarRecomendacao={ProcessarRecomendacao} salvarInput={salvarInput} />
    </>
  );
}

export default App;
