import React from 'react';
import styled from 'styled-components'


const Container = styled.img`
    position: absolute; /* Allow absolute positioning */
    top: 0;  /* Position at the top */
    right: 0;  /* Position at the right */
    width: 30vw;  /* Set a width for the image */
    height: 15vw;  /* Maintain aspect ratio */
    @media (max-width: 768px) {
        display: none;
    }
`


export const Image = () => {
    return (<Container src={require("../images/new_image.png")} alt={'logo'}/>)
}