import React from 'react'
import ImageFiller from 'react-image-filler';
import { BookOverviewContainer, ImageContainer, Title } from './BookOverview.styled'
import BookStatistics from './BookStatistics';

interface BookOverviewProps {
  imageSrc: string | undefined;
  title: string;
}

const BookOverview = ({imageSrc, title}: BookOverviewProps) => {
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
      <BookStatistics numberOfPages={561} rating={4.69} publishYear={2018}/>
    </BookOverviewContainer>
  )
}

export default BookOverview;