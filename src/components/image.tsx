import React from 'react';
import styled from 'styled-components'
import {useState} from "react";
const Container = styled.img`
    position: absolute; /* Allow absolute positioning */
    bottom: 0;  /* Position at the top */
    right: 0;  /* Position at the right */
    width: 30vw;  /* Set a width for the image */
    height: 50vh;  /* Maintain aspect ratio */
    @media (max-width: 768px) {
        display: none;
    }
`


export const Image = () => {
    return (
            <Container src={require("../images/high-angle-books-stack-with-copy-space.jpg")} alt={'logo'} />)
}