import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
    position: absolute; 
    top: 17vw;  
    right: 23vw; 
    width: 5vw;  
    height: 5vw;
    @media (max-width: 768px) {
        top: 12vw;
        left: 3vw;
    }
`
const Books = styled.div`
    position: absolute;
    top: 18.5vw;  
    right: 2vw;  
    width: 7vw;  
    height: auto;
    color: #a7a7a7;
    font-size: 1vw;
    font-family: Inter, sans-serif;
    @media (max-width: 768px) {
        top: 12vw;
        left: 48vw;
        width: 20vw;
        font-size: 2vw;
        color: white;
    }
`
const LB = styled.div`
    position: absolute;
    top: 35vw;  
    right: 13.5vw; 
    width: 14vw; 
    height: auto;
    font-size: 1vw;
    color: #b5b5b5;
    font-weight: bold;
    font-family: Inter, sans-serif;
    @media (max-width: 768px) {
        top: 75vw;
        left: 3vw;
        font-size: 2vw;
        width: 35vw;
    }

`
const Description = styled.div`
    position: absolute;
    top: 40vw;  
    right: 13.5vw;  
    width: 14vw;
    height: auto;
    font-size: 1vw;
    color: #a4a4a4;
    font-family: Inter, sans-serif;
    @media (max-width: 768px) {
        top: 85vw;
        left: 3vw;
        font-size: 2vw;
        width: 35vw;
    }
`

const LogOut = styled.button`
    position: absolute;
    top: 45vw; 
    right: 21.5vw;
    width: 6vw;
    height: 2vw;
    font-size: 1vw;
    font-weight: bolder;
    font-family: Inter, sans-serif;
    @media (max-width: 768px) {
        top: 75vw;
        left: 53vw;
        font-size: 2vw;
        height: 5vw;
        width: 8vw;
    }
`
export const Logo = () => {
    return (
        <div>
            <Image src={require("../images/Group 1.png")} alt={'logo'}/>
            <Books> For your books </Books>
            <LB> LB: Brotherhood of Reader </LB>
            <Description> Build your library, share your thoughts, and join a community of book lovers.</Description>
            <LogOut> LOG OUT </LogOut>
        </div>)
}
