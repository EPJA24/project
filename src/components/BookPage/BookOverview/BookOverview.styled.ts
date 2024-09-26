import { styled } from 'styled-components';


const BookOverviewContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex: 1;
`;

const ImageContainer = styled.div`
  padding-top: 70px;
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  position: relative;
`

const Title = styled.h1`
  font-size: 72px;
  font-family: 'Poppins';
  position: absolute;
  color: white;
  user-select: none;
  bottom: -85px;
  text-align: center;
  mix-blend-mode: difference;
`

export { BookOverviewContainer, ImageContainer, Title }