import { styled } from 'styled-components'

const Title = styled.h1<{$primary?: boolean}>`
  --primary-text-color: ${props => props.$primary ? "black" : "white"};

  font-size: 36px;
  font-family: 'Poppins';
  user-select: none;
  margin: 0;
  margin-top: 25px;
  color: var(--primary-text-color);
`

export { Title }