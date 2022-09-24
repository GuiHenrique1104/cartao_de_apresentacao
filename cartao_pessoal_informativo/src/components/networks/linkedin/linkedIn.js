import React from "react";
import styled from "styled-components";

const DivLink = styled.div`
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

function Linkedin() {
    return (
        <DivLink>
            <a href="https://www.linkedin.com/in/guilherme-oliveira1104" target={"_blank"} rel="noopener noreferrer"><img className="logo" src="img/linkedin.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/guilherme-oliveira1104" target={"_blank"} rel="noopener noreferrer">Visite meu LinkedIn!</a>
        </DivLink>
    )
}

export default Linkedin;