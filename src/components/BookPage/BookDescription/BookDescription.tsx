import React, { useEffect, useState } from 'react';
import {
    BookDescriptionContainer,
    Description,
    Container,
    EditionList,
    Review
} from './styles/BookDescription.styled';
import { Book } from 'lucide-react';
import { Title } from '../../styles';
import { Edition as EditionType } from '../../../lib/types';
import Button from '../../ui/button/Button';
import Edition from './Edition';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface BookDescriptionProps {
    description: string;
    bookUrl?: string;
}

const BookDescription = ({ description, bookUrl }: BookDescriptionProps) => {
    const [reviews, setReviews] = useState([1, 2, 3]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `https://www.backendus.com/books/${params.bookId}/reviews`
                );

                setReviews(response.data);
                console.log(reviews);
            } catch (e) {
                console.log(e);
            }
        };

        fetchReviews();
    }, []);

    if (!reviews) {
        return;
    }

    return (
        <BookDescriptionContainer data-testid={"cont"}>
            <Container>
                <Title data-testid={"title"} $primary>Short description</Title>
                <Description data-testid={"desc"} >{description}</Description>
                <Button data-testid={"button"} icon={<Book />} primary onClick={() => navigate(bookUrl) ?? ''}>
                    Start reading
                </Button>
            </Container>

            <Container data-testid={"cont2"}>
                <Title $primary>Reviews</Title>
                {reviews.map((review, index) => (
                    <Review key={index}>New review</Review>
                ))}
            </Container>
        </BookDescriptionContainer>
    );
};

export default BookDescription;
