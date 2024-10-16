import {styled} from "styled-components";

const ConfButton = styled.button`
    position: relative;
    top: 8vw;
    font-size: 2vw;
    font-weight: bolder;
    background-color: white;
    border-radius: 0.8vw;
    &:hover {
        transform: translateY(-10%);
    }
`

export {ConfButton};