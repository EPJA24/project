import React from 'react';
import ImageFiller from 'react-image-filler';
import { EditionContainer, EditionTitle } from './styles/Edition.styled';
import { Edition as EditionType } from '../../../lib/types';
import { ImageContainer } from '../BookOverview/styles/BookOverview.styled';

interface EditionProps {
    edition: EditionType;
}

const Edition = ({ edition }: EditionProps) => {
    return (
        <EditionContainer data-testid={'editcont'}>
            <ImageContainer data-testid={'imgcont'}>
                {edition.imageSrc ? (
                    <img
                        src={edition.imageSrc}
                        alt="edition image"
                        style={{ borderRadius: '10px' }}
                    />
                ) : (
                    <ImageFiller
                        width={150}
                        height={242}
                        color="white"
                        background="black"
                        style={{ borderRadius: '10px' }}
                    />
                )}
            </ImageContainer>
            <EditionTitle data-testid={'edittitle'}>{edition.title}</EditionTitle>
        </EditionContainer>
    );
};

export default Edition;
