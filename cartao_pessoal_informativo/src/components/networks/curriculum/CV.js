import React from "react";
import styled from "styled-components";

const DivCV = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;

    .logo {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        color: #dbdbdb;
        text-decoration: underline;
    }
`

function CV() {
    return (
        <DivCV>
            <a href="assets/curriculo2022.pdf" target={"_blank"} rel="noopener noreferrer"><img className="logo" src="img/cv.png" alt="" /></a>
            <a href="assets/curriculo2022.pdf" target={"_blank"} rel="noopener noreferrer">Faça o download do meu Curriculo!</a>
        </DivCV>
    )
}

export default CV;