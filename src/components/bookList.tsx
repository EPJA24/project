import React from 'react';
import styled from 'styled-components'
import books from '../../stubs/api/books.json'
import {useState} from "react";


const Cover = styled.img `
    
    width: 10vw;
    left: 1vw;
    top: 1vw;
    position: relative;
    height: 12vw;
    
`
const Container = styled.li`
    color: white;
    position: relative;
    left: 3vw;
    top: 2vw;
    display: flex;
    border: solid 0.2vw white;
    width: 60vw;
    height: 14vw;
    border-radius: 2vw;
    margin-bottom: 2vw;
`
const BookName = styled.div`
    position: absolute;
    left: 20%;
    top: 10%;
    width: 70%;
    height: 2vw;
    line-height: 2vw;
    font-size: 2vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
`
const BookDescription = styled.div`
    position: absolute;
    left: 20%;
    top: 8vw;
    height: 5vw;
    width: 60%;
    font-size: 1vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
`
const Read = styled.div`
    position: absolute;
    left: 90%;
    width: 5vw;
    height: 5vw;
    top: 8vw;
    font-size: 1vw;

    color: #919191;
    font-weight: bold;
`
const Wrapper = styled.ul`
    position: relative;
    top: 8vw;
    max-height: 35vw;
    overflow-y: auto;
    scrollbar-width: none;
    width: 65vw;
    left: 2vw;
    margin: 0;
    padding: 0;
    @media (max-width: 915px) {
        top: 70vw;
        left: 16.5vw;
        color: white;
        font-size: 4vw;
        max-height: none;
        height: 80vw;
        width: 65vw;
    }
`

export const BookList = () => {
    return <Wrapper>
        {Object.entries(books).map((book,index) => (

            <Container>

                <Cover src={require('../images/narnia.jpg')} alt = "cover" />
                <BookName> {book[1].name} </BookName>
                <BookDescription> {book[1].description} </BookDescription>
                {book[1].read ? <Read> You have already read this book.</Read> : <div />}
            </Container>
        ))} </Wrapper>
}