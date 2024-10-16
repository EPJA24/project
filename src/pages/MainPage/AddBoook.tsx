import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";


const AddButton = styled.button`
    height: 2vw;
    width: 9vw;
    margin-bottom: 0.4vw;
    font-weight: bolder;
    position: relative;
    left: 6.5vw;
    border-radius: 1vw;
    font-size: 1vw;
    @font-face {
        src: url("../../fonts/Poppins/Poppins-Medium.ttf") format('truetype');
    }
`

const AddButtonNavigate = () => {
    const navigate = useNavigate();

    return <AddButton onClick={() => navigate('/lb-team/addbook')}> Add new book</AddButton>
}

export default AddButtonNavigate;