import React from "react";
import styled from "styled-components";

const DivGit = styled.div`
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
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        color: #dbdbdb;
        text-decoration: underline;
    }
`

function Github () {
    return (
        <DivGit>
            <a href="https://github.com/GuiHenrique1104" target={"_blank"} rel="noopener noreferrer"><img className="logo" src="img/github.png" alt=""/></a>
            <a href="https://github.com/GuiHenrique1104" target={"_blank"} rel="noopener noreferrer">Acesse meu GitHub!</a>
        </DivGit>
    )
}

export default Github;