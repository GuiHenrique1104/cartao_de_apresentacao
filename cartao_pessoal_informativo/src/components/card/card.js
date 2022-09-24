import React from "react";
import styled from "styled-components";
import Networks from "../networks/networks";
import Personal from "../personal_info/personal";

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70vh;
    border: 2px solid #black;
    border-radius: 20px;
    margin: 15vh auto;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
`

function Card() {
    return (
        <DivCard>
            <Personal></Personal>
            <Networks></Networks>
        </DivCard>
    )
}

export default Card;