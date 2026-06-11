function ViewSolicitarRecomendacao() {
    return (
        <div className="viewSolicitarRecomendacao">
            <h1>Descubra sua próxima aventura</h1>
            <form action="" method="POST">
                <input type="text" name="jogo1"/>
                <input type="text" name="jogo2"/>
                <input type="text" name="jogo3"/>
                <button type="button">confirmar</button>
            </form>
        </div>
    )
}

export default ViewSolicitarRecomendacao;