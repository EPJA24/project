import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
    position: absolute; 
    top: 2vw;  
    right: 23vw; 
    width: 5vw;  
    height: 5vw;
    @media (max-width: 915px) {
        top: 50vw;
        left: 3vw;
        width: 10vw;
        height: 10vw;
        
    }
`
const Books = styled.div`
    position: absolute;
    top: 2vw;  
    right: 2vw;  
    width: 7vw;  
    height: auto;
    color: #a7a7a7;
    font-size: 1vw;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 52vw;
        right: 1vw;
        text-align: center;
        font-size: 4vw;
        width: 30vw;

    }
`
const LB = styled.div`
    position: absolute;
    top: 11vw;  
    right: 14vw; 
    width: 14vw; 
    height: auto;
    font-size: 1vw;
    color: #b5b5b5;
    font-weight: bold;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 180vw;
        left: 3vw;
        color: white;
        font-size: 4vw;
        height: 5vw;
        width: 60vw;
    }

`
const Description = styled.div`
    position: absolute;
    top: 16vw;  
    right: 14vw;  
    width: 14vw;
    height: auto;
    font-size: 1vw;
    color: #a4a4a4;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 200vw;
        left: 3vw;
        color: white;
        font-size: 4vw;
        height: 5vw;
        width: 60vw;
    }
`

const LogOut = styled.button`
    position: absolute;
    top: 35vw; 
    right: 21.5vw;
    width: 6vw;
    height: 2vw;
    font-size: 1vw;
    font-weight: bolder;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 200vw;
        right: 3vw;
        font-size: 3vw;
        height: 10vw;
        width: 15vw;
    }
`
export const Logo = () => {
    return (
        <div>
            <Image src={require("../../assets/logo.png")} alt={'logo'}/>
            <Books> For your books </Books>
            <LB> LB: Brotherhood of Reader </LB>
            <Description> Build your library, share your thoughts, and join a community of book lovers.</Description>
            <LogOut> LOG OUT </LogOut>
        </div>)
}