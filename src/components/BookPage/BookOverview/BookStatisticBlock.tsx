import React from 'react';
import { Block, BlockTitle, BlockValue } from './styles/BookStatisticBlock.styled';

interface BookStatisticBlockProps {
    title: string;
    value: number;
}

const BookStatisticBlock = ({ title, value }: BookStatisticBlockProps) => {
    return (
        <Block>
            <BlockTitle>{title}</BlockTitle>
            <BlockValue>{value}</BlockValue>
        </Block>
    );
};

export default BookStatisticBlock;
