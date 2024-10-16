import React from "react";
import {ConfButton} from './styles/Confirm'
import axios from "axios";

const sendId = (id: string) => {
    axios.post('https://www.backendus.com/books', {google_books_id: id}, {withCredentials: true}).then(r => console.log(r))
}

const Confirm = ({ id }: { id: string}) => {
    return id === '' ? (
        <div />
    ) : (
        <ConfButton onClick={() => sendId(id)}> Add this book to my collection </ConfButton>
    );
};


export default Confirm;