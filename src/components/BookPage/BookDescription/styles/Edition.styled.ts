import { styled } from 'styled-components'
import { Title } from '../../../styles'

const EditionContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`

const EditionTitle = styled(Title)`
  font-size: 14px;
  color: gray;
  margin: 0;
`

export { EditionContainer, EditionTitle }