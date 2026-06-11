function ViewJogoRecomendado(props) {
    return (
        <>
    <header className="app-header">
        <div className="app-header-logo">
            <span>🎮</span> FyGame
        </div>

        <div className="app-header-user">
            <span className="app-header-nome">
                Olá, {props.usuario?.nome || "Jogador"}!
            </span>

            <button
                className="app-header-logout"
                onClick={props.handleLogout}
            >
                Sair
            </button>
        </div>
    </header>

    <div className="viewJogoRecomendado">
        <h1>Este jogo é para você!</h1>

        <div className="recomendacaoDetalhes">

            <a
                href={props.Link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={props.LinkImagem}
                    alt={props.Titulo}
                    className="recomendacao-imagem"
                />
            </a>

            <div className="recomendacao-info">
                <h2 className="recomendacao-titulo">
                    {props.Titulo}
                </h2>

                <span className="recomendacao-genero">
                    {props.Genero}
                </span>

                <p className="recomendacao-descricao">
                    {props.Descricao}
                </p>

                <div className="recomendacao-motivo">
                    <h3>Por que recomendamos?</h3>

                    <p>{props.Motivo}</p>
                </div>

                <a
                    href={props.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="recomendacao-link"
                >
                    Ver jogo
                </a>
                <button className="voltar" onClick={props.irParaRecomendacao}>voltar</button>
            </div>

        </div>
    </div>
</>
    )
}

export default ViewJogoRecomendado;