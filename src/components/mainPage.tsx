import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    color: white;  
    font-family: "Inter Semi Bold",sans-serif;
    font-weight: bolder;
    font-size: 5vw;
    border-radius: 5vw;
    width: 60vw;
    position: relative;
    top: 3vw;
    left: 3vw;
    height: auto;
`

export default function MainPage() {
    return (<Container> WELCOME BACK, USER. </Container>);


}