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
        <BookDescriptionContainer>
            <Container>
                <Title $primary>Short description</Title>
                <Description>{description}</Description>
                <Button icon={<Book />} primary onClick={() => navigate(bookUrl) ?? ''}>
                    Start reading
                </Button>
            </Container>

            <Container>
                <Title $primary>Reviews</Title>
                {reviews.map((review, index) => (
                    <Review key={index}>New review</Review>
                ))}
            </Container>
        </BookDescriptionContainer>
    );
};

export default BookDescription;
