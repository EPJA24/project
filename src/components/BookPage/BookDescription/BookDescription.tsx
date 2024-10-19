import React, { useEffect, useState } from 'react';
import {
    BookDescriptionContainer,
    Description,
    Container,
    EditionList,
    Link as PreviewLink,
    Review
} from './styles/BookDescription.styled';
import { Book } from 'lucide-react';
import { Title } from '../../styles';
import { Edition as EditionType } from '../../../lib/types';
import Button from '../../ui/button/Button';
import Edition from './Edition';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface BookDescriptionProps {
    description: string;
    bookUrl?: string;
}

const BookDescription = ({ description, bookUrl }: BookDescriptionProps) => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `https://www.backendus.com/books/${params.bookId}/reviews`,
                    {
                        withCredentials: true
                    }
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
        <BookDescriptionContainer data-testid={'cont'}>
            <Link to="/lb-team" style={{ textDecoration: 'none', color: 'black' }}>
                Home
            </Link>
            <Container>
                <Title data-testid={'title'} $primary>
                    Short description
                </Title>
                <Description data-testid={'desc'}>{description}</Description>
                <Button
                    data-testid={'button'}
                    icon={<Book />}
                    primary
                >
                    <PreviewLink href={bookUrl ?? ''}>
                        Start reading
                    </PreviewLink>
                </Button>
            </Container>

            <Container data-testid={'cont2'}>
                <Title $primary>Reviews</Title>
                {reviews.map((review, index) => (
                    <Review key={index}>{review.text}</Review>
                ))}
            </Container>
        </BookDescriptionContainer>
    );
};

export default BookDescription;
