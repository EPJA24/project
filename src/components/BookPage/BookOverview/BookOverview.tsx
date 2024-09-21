import React, { useState } from 'react'

import ImageFiller from 'react-image-filler';
import { Check, Forward, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { BookOverviewContainer, ImageContainer, BookTitle, Controls } from './styles/BookOverview.styled'
import BookStatistics from './BookStatistics';
import Button from '../../ui/button/Button';

interface BookOverviewProps {
  imageSrc?: string | undefined;
  title: string;
  numberOfPages: number;
  rating: number;
  publishYear: number;
  isFinished: boolean;
}

const BookOverview = ({imageSrc, title, numberOfPages, rating, publishYear, isFinished}: BookOverviewProps) => {
  const location = useLocation()
  const [isCopied, setIsCopied] = useState(false);

  const copyClipboard = () => {
    navigator.clipboard.writeText(`${location.pathname}`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }


  return (
    <BookOverviewContainer>
      <ImageContainer>
        {imageSrc ?
          <img src={imageSrc} alt="book image" style={{borderRadius: "10px"}}/>
        : 
          <ImageFiller width={350} height={520} color='black' background='white' style={{borderRadius: "10px"}}/>
        }
        <BookTitle $primary>{title}</BookTitle>
      </ImageContainer>
      <BookStatistics numberOfPages={numberOfPages} rating={rating} publishYear={publishYear}/>
      <Controls>
        <Button icon={<Forward />} onClick={copyClipboard} disabled={isCopied}>{isCopied ? "Copied" : "Share"}</Button>
        <Button icon={<Check />}>{isFinished ? "Mark as unread" : "Mark as read"}</Button>
        <Button icon={<Star />}>Add review</Button>
      </Controls>
    </BookOverviewContainer>
  )
}

export default BookOverview;