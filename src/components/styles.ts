import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    font-style: normal;
    src: url("../fonts/Poppins/Poppins-Medium.ttf") format('truetype');
  }

  @font-face {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-style: normal;
    src: url("../fonts/Poppins/Poppins-Bold.ttf") format('truetype');
  }

  @font-face {
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
    font-style: normal;
    src: url("../fonts/Poppins/Poppins-Regular.ttf") format('truetype');
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const Title = styled.h1<{ $primary?: boolean }>`
  --primary-text-color: ${(props) => (props.$primary ? "black" : "white")};

  font-size: 36px;
  user-select: none;
  margin: 0;
  margin-top: 25px;
  color: var(--primary-text-color);
`;

export { Title, GlobalStyle };
