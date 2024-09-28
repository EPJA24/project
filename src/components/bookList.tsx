import React from 'react';
import styled from 'styled-components'
import books from '../../stubs/api/books.json'
import {Switch} from "./switch";

const Cover = styled.img `
    
    width: 10vw;
    left: 5%;
    top: 5%;
    position: relative;
    height: 12vw;
    
`
const Container = styled.div`
    color: white;
    position: relative;
    left: 3vw;
    top: 10%;
    display: flex;
    border: solid 0.4vw white;
    width: 60vw;
    height: 14vw;
    border-radius: 2vw;
    margin-top: 2vw;
    @media (max-width: 768px) {
        left: 1.5vw;
        top: 50%;
        position: relative;
    }
`
const BookName = styled.div`
    position: relative;
    display: table-column;
    left: 10%;
    top: 10%;
    line-height: 2vw;
    font-size: 2vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
`
const BookDescription = styled.div`
    position: relative;
    left: -18.5%;
    top: 70%;
    height: 5vw;
    width: 35vw;
    font-size: 2vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
`
export const BookList = () => {

    return <div style={{position: "relative",top: "10%"}}>
        {Object.entries(books).map((book,index) => (
            <Container>

                <Cover src={require('../images/narnia.jpg')} alt = "cover" />
                <BookName> {book[1].name} </BookName>
                <BookDescription> {book[1].author}, {book[1].year}</BookDescription>
                <Switch num={index} />

            </Container>
        ))} </div>
}