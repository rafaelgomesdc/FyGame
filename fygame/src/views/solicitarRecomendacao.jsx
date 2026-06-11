import { useState } from "react";

function ViewSolicitarRecomendacao(props) {
    //
    return (
        <div className="viewSolicitarRecomendacao">
            <h1>Descubra sua próxima aventura</h1>
            <form onSubmit={props.GerarRecomendacao}>
                <input type="text" name="jogo1" onChange={props.salvarInput} />
                <input type="text" name="jogo2" onChange={props.salvarInput} />
                <input type="text" name="jogo3" onChange={props.salvarInput} />
                <button>confirmar</button>
            </form>
        </div>
    )
}

export default ViewSolicitarRecomendacao;