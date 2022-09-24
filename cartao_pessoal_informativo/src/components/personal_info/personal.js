import React from "react";
import Data from "./data/data";
import Photo from "./photo/photo";
import styled from "styled-components";

const DivPersonal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 50px 0 0 0;
`

function Personal() {
    return (
        <DivPersonal>
            <Photo></Photo>
            <Data></Data>
        </DivPersonal>
    )
}

export default Personal;