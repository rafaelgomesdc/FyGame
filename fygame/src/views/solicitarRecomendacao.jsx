function ViewSolicitarRecomendacao(props) {
    //
    return (
        <div className="viewSolicitarRecomendacao">
            <div className="solicitar-card">

                <h1 className="solicitar-title">
                    Descubra sua próxima aventura
                </h1>

                <p className="solicitar-subtitle">
                    Informe três jogos que você gosta e deixe a IA encontrar sua próxima experiência.
                </p>

                <form className="solicitar-form">
                    <div className="solicitar-field">
                        <label>Jogo Favorito #1</label>
                        <input
                            type="text"
                            name="jogo1"
                            placeholder="Ex: Minecraft"
                            onChange={props.salvarInput}
                        />
                    </div>

                    <div className="solicitar-field">
                        <label>Jogo Favorito #2</label>
                        <input
                            type="text"
                            name="jogo2"
                            placeholder="Ex: Terraria"
                            onChange={props.salvarInput}
                        />
                    </div>

                    <div className="solicitar-field">
                        <label>Jogo Favorito #3</label>
                        <input
                            type="text"
                            name="jogo3"
                            placeholder="Ex: Stardew Valley"
                            onChange={props.salvarInput}
                        />
                    </div>

                    <button
                        type="button"
                        className="solicitar-btn"
                        onClick={props.ProcessarRecomendacao}
                    >
                        Gerar Recomendação
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ViewSolicitarRecomendacao;