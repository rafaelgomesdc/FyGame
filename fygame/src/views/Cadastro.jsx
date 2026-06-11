import { useState } from "react";

function ViewCadastro({ onCadastro, irParaLogin }) {
  const [form, setForm] = useState({ nome: "", email: "", senha: "", confirmar: "" });
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    if (form.senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (form.senha !== form.confirmar) {
      setErro("As senhas não coincidem.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("fygame_usuarios") || "[]");
    const jaExiste = usuarios.find((u) => u.email === form.email);

    if (jaExiste) {
      setErro("Já existe uma conta com este e-mail.");
      return;
    }

    const novoUsuario = { nome: form.nome, email: form.email, senha: form.senha };
    usuarios.push(novoUsuario);
    localStorage.setItem("fygame_usuarios", JSON.stringify(usuarios));
    localStorage.setItem("fygame_logado", JSON.stringify(novoUsuario));

    setSucesso(true);
    setTimeout(() => onCadastro(novoUsuario), 1000);
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span className="auth-logo-icon">🎮</span>
          <span className="auth-logo-text">FyGame</span>
        </div>

        <h1 className="auth-title">Criar conta</h1>
        <p className="auth-subtitle">Junte-se à aventura</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="cad-nome">Nome</label>
            <input
              id="cad-nome"
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="cad-email">E-mail</label>
            <input
              id="cad-email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="cad-senha">Senha</label>
            <input
              id="cad-senha"
              type="password"
              name="senha"
              placeholder="Mínimo 6 caracteres"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="cad-confirmar">Confirmar senha</label>
            <input
              id="cad-confirmar"
              type="password"
              name="confirmar"
              placeholder="Repita a senha"
              value={form.confirmar}
              onChange={handleChange}
              required
            />
          </div>

          {erro && <p className="auth-erro">{erro}</p>}
          {sucesso && <p className="auth-sucesso">✅ Conta criada! Entrando...</p>}

          <button type="submit" className="auth-btn" disabled={sucesso}>
            Criar conta
          </button>
        </form>

        <p className="auth-link">
          Já tem uma conta?{" "}
          <button className="auth-link-btn" onClick={irParaLogin}>
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
}

export default ViewCadastro;