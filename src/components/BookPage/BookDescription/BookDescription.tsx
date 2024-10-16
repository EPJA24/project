import React, { useState } from "react";
import {
  BookDescriptionContainer,
  Description,
  Container,
  EditionList,
} from "./styles/BookDescription.styled";
import { Book } from "lucide-react";
import { Title } from "../../styles";
import { Edition as EditionType } from "../../../lib/types";
import Button from "../../ui/button/Button";
import Edition from "./Edition";
import { useNavigate } from "react-router-dom";

const EDITIONS: EditionType[] = [];

interface BookDescriptionProps {
  description: string;
  bookUrl?: string;
}

const BookDescription = ({ description, bookUrl }: BookDescriptionProps) => {
  const [editions, setEditions] = useState<EditionType[]>(EDITIONS);
  const navigate = useNavigate();

  return (
    <BookDescriptionContainer>
      <Container>
        <Title $primary>Short description</Title>
        <Description>{description}</Description>
        <Button icon={<Book />} primary onClick={() => navigate(bookUrl) ?? ""}>
          Start reading
        </Button>
      </Container>

      <Container>
        <Title $primary>Other editions</Title>
        <EditionList>
          {editions.map((edition) => (
            <Edition edition={edition} key={edition.title} />
          ))}
        </EditionList>
      </Container>
    </BookDescriptionContainer>
  );
};

export default BookDescription;
