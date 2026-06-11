import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function GerarRecomendacao(jogo1, jogo2, jogo3) {
    const response = await client.responses.create({
        model: "gpt-5",
        input: `
            Responda APENAS em JSON válido no formato:

            {
                "Titulo": "Título do jogo recomendado",
                "Genero": "Gênero do jogo recomendado",
                "Descricao": "Descrição do jogo recomendado",
                "Motivo": "Motivo da recomendação",
                "Link": "Link para mais informações sobre o jogo recomendado",
                "LinkImagem": "Link para uma imagem da capa do jogo recomendado"   
            }

            Recomende um jogo baseado nas preferências dos jogos:
            ${jogo1}, ${jogo2} e ${jogo3}
        `,
    });

    const dados = JSON.parse(response.output_text);

    return dados;
}