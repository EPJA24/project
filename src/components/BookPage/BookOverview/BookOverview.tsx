import React, { useState } from 'react';

import ImageFiller from 'react-image-filler';
import { Check, Forward, Star } from 'lucide-react';

import {
    BookOverviewContainer,
    ImageContainer,
    BookTitle,
    Controls,
    Image
} from './styles/BookOverview.styled';
import BookStatistics from './BookStatistics';
import Button from '../../ui/button/Button';
import useModal from '../../../hooks/useModal';
import ReviewModal from './ReviewModal';

interface BookOverviewProps {
    imageSrc: string;
    bookName: string;
    rating: number;
    publishYear: number;
    numberOfPages: number;
}

const BookOverview = ({
    imageSrc,
    bookName,
    rating,
    publishYear,
    numberOfPages
}: BookOverviewProps) => {
    const [isCopied, setIsCopied] = useState(false);
    const { isOpen, handleClose, handleOpen } = useModal();

    const copyClipboard = () => {
        navigator.clipboard.writeText(`${window.location.href}`);
        setIsCopied(true);
        const timeout = setTimeout(() => setIsCopied(false), 1000);

        return () => clearTimeout(timeout);
    };

    const markAsRead = () => {};

    return (
        <BookOverviewContainer data-testid={'bookovercont'}>
            <ImageContainer data-testid={'imgcont'}>
                {imageSrc ? (
                    <Image src={imageSrc} alt="book image" />
                ) : (
                    <ImageFiller
                        width={350}
                        height={520}
                        color="black"
                        background="white"
                        style={{ borderRadius: '10px' }}
                    />
                )}
                <BookTitle data-testid={'booktitle'} $primary>
                    {bookName}
                </BookTitle>
            </ImageContainer>
            <BookStatistics
                numberOfPages={numberOfPages}
                rating={rating}
                publishYear={publishYear}
            />
            <Controls data-testid={'controls'}>
                <Button icon={<Forward />} onClick={copyClipboard} disabled={isCopied}>
                    {isCopied ? 'Copied' : 'Share'}
                </Button>
                <Button icon={<Star />} onClick={handleOpen}>
                    Add review
                </Button>
                {isOpen && <ReviewModal handleClose={handleClose} />}
            </Controls>
        </BookOverviewContainer>
    );
};

export default BookOverview;
