import React from "react";
import styled from "styled-components";

const DivPhoto = styled.div `
    margin-left: 0;
    
    .img_perfil {
        width: 300px;
        height: 300px;
    }
`

function Photo() {
    return (
        <DivPhoto>
             <img className="img_perfil" src="img/man.png" alt=""/>
        </DivPhoto>
    )
}

export default Photo;