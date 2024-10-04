import { styled } from "styled-components";
import { Title } from "../../../styles";

const BookOverviewContainer = styled.div`
  background-color: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 70px 50px;
  gap: 30px;
  flex: 1;

  @media screen and (max-width: 1024px) {
    min-height: 100vh;
  }

  @media screen and (max-width: 620px) {
    padding: 35px 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  position: relative;
`;

const BookTitle = styled(Title)`
  font-size: 72px;
  position: absolute;
  color: white;
  bottom: -40px;
  text-align: center;
  mix-blend-mode: difference;

  @media screen and (max-width: 1024px) {
    font-size: 54px;
    bottom: -25px;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export { BookOverviewContainer, ImageContainer, BookTitle, Controls };
