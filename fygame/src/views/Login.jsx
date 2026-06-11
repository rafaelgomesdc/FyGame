import { useState } from "react";

function ViewLogin({ onLogin, irParaCadastro }) {
  const [form, setForm] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    const usuarios = JSON.parse(localStorage.getItem("fygame_usuarios") || "[]");
    const usuario = usuarios.find(
      (u) => u.email === form.email && u.senha === form.senha
    );

    if (!usuario) {
      setErro("E-mail ou senha incorretos.");
      return;
    }

    localStorage.setItem("fygame_logado", JSON.stringify(usuario));
    onLogin(usuario);
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span className="auth-logo-icon">🎮</span>
          <span className="auth-logo-text">FyGame</span>
        </div>

        <h1 className="auth-title">Entrar</h1>
        <p className="auth-subtitle">Descubra sua próxima aventura</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="login-email">E-mail</label>
            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="login-senha">Senha</label>
            <input
              id="login-senha"
              type="password"
              name="senha"
              placeholder="••••••••"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          {erro && <p className="auth-erro">{erro}</p>}

          <button type="submit" className="auth-btn">
            Entrar
          </button>
        </form>

        <p className="auth-link">
          Ainda não tem conta?{" "}
          <button className="auth-link-btn" onClick={irParaCadastro}>
            Criar conta
          </button>
        </p>
      </div>
    </div>
  );
}

export default ViewLogin;