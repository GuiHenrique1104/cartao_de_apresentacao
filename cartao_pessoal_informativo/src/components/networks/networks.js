import React from "react";
import Github from "./github/github";
import Linkedin from "./linkedin/linkedIn";
import styled from "styled-components";
import CV from "./curriculum/CV";

const DivNet = styled.div `
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 95px;
    border-radius: 0 0 20px 20px;
    margin: auto;
    margin-bottom: 0;
    background-color: #999;
`

function Networks() {
    return (
        <DivNet>
            <Github></Github>
            <Linkedin></Linkedin>
            <CV></CV>
        </DivNet>
    )
}

export default Networks;