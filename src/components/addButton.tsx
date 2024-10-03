import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from "react";
const Add = styled.button`
    position: absolute;
    top: 10vw;
    left: 5vw;
    width: 15vw;
    height: 3vw;
    border-radius: 1vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
    font-size: 1.4vw;
    @media (max-width: 915px) {
        top: 165vw;
        left: 3vw;
        color: black;
        font-size: 2.5vw;
        height: 7vw;
        border-radius: 2vw;
        width: 30vw;
    }
`

export const AddBookButton = () => {
    return <Add onClick={() => console.log(1)}> ADD NEW BOOK &#x1F50D; </Add>
}