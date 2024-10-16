import styled from 'styled-components';

const Container = styled.div`
    height: 10vw;
    width: 60vw;
    border: solid white 0.2vw;
    border-radius: 0.7vw;;
    position: relative;
    left: 5vw;
    top: 4vw;
    color: white;
    font-weight: bolder;
    font-size: 3vw;
    @font-face {
        src: url("../../../fonts/Poppins/Poppins-Medium.ttf") format('truetype');
    }
`
const Inp = styled.input <{isGlowing: boolean}>`
    height: 2vw;
    width: 16vw;
    margin: 0.5vw;
    top: 2vw;
    position: relative;
    font-weight: bolder;
    font-size: 1.5vw;
    ${({ isGlowing }) =>
    isGlowing &&
    `
    box-shadow: 0 0 1vw 0.5vw white;
    border-color: white;
  `}
`
const Submit = styled.button`
    position: relative;
    height: 2.4vw;
    width: 5vw;
    top: 1.8vw;
    left: 1vw;
    font-weight: bolder;
    font-size: 1vw;
    background-color: white;
`
export {Container, Inp, Submit};