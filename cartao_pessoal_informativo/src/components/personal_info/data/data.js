import React from "react";
import styled from "styled-components";

const DivData = styled.div `
    text-align: center;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-size: 2em;
        font-weight: 700;
        margin-bottom: 5px:
    }

    h2 {
        font-size: 
        font-weight: 500;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 500;
    }

    h4 {
        font-size: 20px;
        font-weight: 500;
    }

    p {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 400;
    }
`

function Data() {
    return (
        <DivData>
            <h1>Guilherme H. M. de Oliveira</h1>
            <h2>Fiap - Análise e Desenvolvimento de Sistemas</h2>
            <h3>Conclusão: 12/2023</h3>
            
            <p>Sou Guilherme tenho 22 anos e estou em busca do meu primeiro estágio na área.</p>
            <hr/>
            <p>Possuo conhecimento em algumas linguagens de programação, com foco em Python, 
                    <br/>mas disponibilidade e interesse em aprender novas linguagens e ferramentas.
                    <br/>Conhecimento em Scrum e Kanban
            </p>
            <h4>Plano de estudo:</h4>
            <p>Meu plano de aprendizado até o fim do ano, é concluir a Formação Front-end, Formação Django e Django REST API's, na plataforma da Alura.</p>
        </DivData>
    )
}

export default Data;