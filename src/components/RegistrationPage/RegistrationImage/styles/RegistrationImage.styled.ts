import { styled } from 'styled-components';
import image from '../../../../assets/reg_back_1.png';

const ImageContainer = styled.div`
    display: flex;
    width: 60%;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export { ImageContainer };
