import { useState } from "react";

function ViewSolicitarRecomendacao(enviarForm) {
    return (
        <div className="viewSolicitarRecomendacao">
            <h1>Descubra sua próxima aventura</h1>
            <form onSubmit={enviarForm}>
                <input type="text" name="jogo1"/>
                <input type="text" name="jogo2"/>
                <input type="text" name="jogo3"/>
                <button>confirmar</button>
            </form>
        </div>
    )
}

export default ViewSolicitarRecomendacao;