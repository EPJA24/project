import { styled } from 'styled-components'

const Button = styled.button<{$primary?: boolean}>`
  --primary-color: ${props => props.$primary ? "black" : "white"};
  --primary-text-color: ${props => props.$primary ? "white" : "black"};
  --hover-color: #989898;

  background-color: var(--primary-color);
  height: 59px;
  border: none;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  padding: 4px 10px;
  color: var(--primary-text-color);
  border-radius: 30px;
  transition: ease-in 0.1s;

  &:hover {
    color: var(--hover-color)
  }
`

const Icon = styled.div<{$primary?: boolean}>`
  --primary-color: black;
  --secondary-color: white;

  background-color: ${props => !props.$primary ? 'var(--primary-color)' : 'var(--secondary-color)'};
  color: ${props => !props.$primary ? 'var(--secondary-color)' : 'var(--primary-color)'};
  padding: 8px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Button, Icon }