import React from 'react';
import styled from 'styled-components'


const Container = styled.img`
    display: none;
    @media (max-width: 932px) {
        position: absolute;
        width: 100vw;
        height: 20vh;
        display: flex;
        top: 0;
    }
`


export const MobileImage = () => {
    return (
        <Container src={require("../images/ezgif-5-495cdece68.jpg")} alt={'logo'} />)
}