import { styled } from 'styled-components'

const Block = styled.div`
  flex-grow: 1;
  flex-basis: 200;
  text-align: center;
`

const BlockTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin: 0;
`

const BlockValue = styled.p`
  font-size: 16px;
  color: gray;
  margin: 0;
`

export { Block, BlockTitle, BlockValue }