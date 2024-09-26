import React from 'react'
import ImageFiller from 'react-image-filler';
import { BookOverviewContainer, ImageContainer, Title } from './BookOverview.styled'
import BookStatistics from './BookStatistics';
import Button from '../../ui/button/Button';
import { Check, Forward } from 'lucide-react';

interface BookOverviewProps {
  imageSrc?: string | undefined;
  title: string;
  numberOfPages: number;
  rating: number;
  publishYear: number;
  isFinished: boolean;
}

const BookOverview = ({imageSrc, title, numberOfPages, rating, publishYear, isFinished}: BookOverviewProps) => {
  return (
    <BookOverviewContainer>
      <ImageContainer>
        {imageSrc ?
          <img src={imageSrc} alt="book image" style={{borderRadius: "10px"}}/>
        : 
          <ImageFiller width={350} height={520} color='black' background='white' style={{borderRadius: "10px"}}/>
        }
        <Title>{title}</Title>
      </ImageContainer>
      <BookStatistics numberOfPages={numberOfPages} rating={rating} publishYear={publishYear}/>
      <div style={{display: "flex", gap: "10px"}}>
        <Button icon={<Forward />}>Share</Button>
        <Button icon={<Check />}>{isFinished ? "Mark as unread" : "Mark as read"}</Button>
      </div>
    </BookOverviewContainer>
  )
}

export default BookOverview;