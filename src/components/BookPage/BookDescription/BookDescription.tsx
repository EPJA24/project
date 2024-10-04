import React, { useState } from 'react'
import { BookDescriptionContainer, Description, Container, EditionList } from './styles/BookDescription.styled'
import { Book } from 'lucide-react'
import { Title } from '../../styles'
import { Edition as EditionType } from '../../../lib/types'
import Button from '../../ui/button/Button'
import Edition from './Edition'


const EDITIONS: EditionType[] = [
  {
    title: "El odio que das",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "Thug. L'odi que dónes",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "El odio que das",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "Thug. L'odi que dónes",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "El odio que das",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "Thug. L'odi que dónes",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "El odio que das",
    imageSrc: undefined,
    url: undefined,
  },
  {
    title: "Thug. L'odi que dónes",
    imageSrc: undefined,
    url: undefined,
  }
]

const BookDescription = () => {
  const [editions, setEditions] = useState<EditionType[]>(EDITIONS)

  return (
    <BookDescriptionContainer>
      <Container>
        <Title $primary>Short description</Title>
        <Description>Sixteen-year-old Starr Carter moves be- tween two worlds: the poor neighborhood she lives in and the suburban prep school she attends. That uneasy balance is shattered when Starr witnesses the fatal shooting of her childhood best friend by a police officer. Khalil was unarmed, and soon his death is a national headline</Description>
        <Button icon={<Book />} primary>Start reading</Button>
      </Container>

      <Container>
        <Title $primary>Other editions</Title>
        <EditionList>
          {editions.map((edition) => (
            <Edition edition={edition} key={edition.title}/>
          ))}
        </EditionList>
      </Container>
    </BookDescriptionContainer>
  )
}

export default BookDescription