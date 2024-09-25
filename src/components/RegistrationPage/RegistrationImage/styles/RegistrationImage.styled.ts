import { styled } from 'styled-components';
import image from '../../../../assets/reg_back_1.png';


const ImageContainer = styled.div`
  display: flex;
  width: 60%;
  background-image: url(${image}); 
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
   width: 40%;
   display: table;
   height: 40%;
  }
`;

export { ImageContainer };