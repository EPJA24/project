import React, { useEffect, useState } from 'react';
import { BookPageContainer } from './BookPage.styled';
import BookOverview from '../../components/BookPage/BookOverview/BookOverview';
import BookDescription from '../../components/BookPage/BookDescription/BookDescription';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Book } from '../../lib/types';
import AuthCheck from '../../utils/AuthCheck';
import { Helmet } from 'react-helmet';

const BookPage = () => {
    const [data, setData] = useState<Book>();
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get<Book>(
                    `https://www.backendus.com/books/${params.bookId}`,
                    {
                        withCredentials: true
                    }
                );
                console.log('Fetched books:', response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching initial books:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBook();
    }, []);

    if (!data) {
        return;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthCheck>
            <Helmet>
                <title>Book</title>
                <meta name="description" content="A page with more detailed work with the book" />
            </Helmet>
            <BookPageContainer>
                <BookDescription description={data.description} bookUrl={data.previewLink} />
                <BookOverview
                    imageSrc={data.cover_url}
                    bookName={data.title}
                    numberOfPages={data.page_count}
                    rating={data.google_rating}
                    publishYear={Number(data.published_date.split('-')[0])}
                />
            </BookPageContainer>
        </AuthCheck>
    );
};

export default BookPage;
