import styled from "styled-components";
import React from "react";
import {useState} from "react";




const Mark = styled.div`

    position: relative;
    top: 10%;
    right: 5%;
    font-size: 1.5vw;
`
const ToggleRectBW = styled.div`
    
    position: relative;
    left: -5%;
    top: 25%;
    width: 10vw;
    height: 2vw;
    font-size: 2vw;
    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox'] + label {
        display: block;
        position: relative;
        width: 3em;
        height: 1.6em;
        margin-bottom: 20px;
        background: #50565a;
        border-radius: 0.2em;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    input[type='checkbox'] + label:before {
        content: "";
        display: block;
        width: 1.2em;
        height: 1.2em;
        border-radius: 0.2em;
        background: #f7f2f2;
        position: absolute;
        left: 0.2em;
        top: 0.2em;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }

    input[type='checkbox']:checked + label {
        background: #40464a;
    }

    input[type='checkbox']:checked + label:before {
        left: 1.6em;
    }
`;


export const Switch = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log(isChecked)
    };
    return (
        <div>
            <Mark> Mark book as read </Mark>
        <ToggleRectBW>
            <input type="checkbox" id={props.num} checked={isChecked} onChange={handleToggle}/>
            <label htmlFor={props.num}></label>

        </ToggleRectBW>
        </div>
    );
};