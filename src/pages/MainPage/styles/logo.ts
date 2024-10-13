import styled from 'styled-components';


const Description = styled.div`
    position: absolute;
    top: 16vw;  
    right: 14vw;  
    width: 14vw;
    height: auto;
    font-size: 1vw;
    color: #a4a4a4;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 200vw;
        left: 3vw;
        color: white;
        font-size: 4vw;
        height: 5vw;
        width: 60vw;
    }
`

const LogOut = styled.button`
    display: flex;
    width: 6vw;
    height: 2vw;
    font-size: 1vw;
    font-weight: bolder;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 200vw;
        right: 3vw;
        font-size: 3vw;
        height: 10vw;
        width: 15vw;
    }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
  @media (max-width: 768px) {
     margin-left: 20px;
  }
`;

const Logo = styled.img`
  weight: auto;
  @media (max-width: 768px) {
    weight: 32px;
    height: 32px;
  }
`;

const VerticalLine = styled.div`
  width: 2px; 
  height: 30px; 
  background-color: white; 
  margin: 0 10px; 
  @media (max-width: 768px) {
    height: 25px;
  }
`;

const LogoText = styled.span`
  color: white;
  font-size: 30px;
  font-weight: extra-light;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export { Description, LogOut, LogoContainer, Logo, VerticalLine, LogoText  };