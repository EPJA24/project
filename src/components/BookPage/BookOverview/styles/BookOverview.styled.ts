import { styled } from 'styled-components';
import { Title } from '../../../styles';

const BookOverviewContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 70px 50px;
  gap: 30px;
  flex: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  position: relative;
`

const BookTitle = styled(Title)`
  font-size: 72px;
  position: absolute;
  color: white;
  bottom: -40px;
  text-align: center;
  mix-blend-mode: difference;
`

const Controls = styled.div`
  display: flex;
  gap: 10px;
`

export { BookOverviewContainer, ImageContainer, BookTitle, Controls }