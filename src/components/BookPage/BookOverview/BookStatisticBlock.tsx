import React from 'react';
import { Block, BlockTitle, BlockValue } from './styles/BookStatisticBlock.styled';

interface BookStatisticBlockProps {
    title: string;
    value: number;
}

const BookStatisticBlock = ({ title, value }: BookStatisticBlockProps) => {
    return (
        <Block data-testid={"block"}>
            <BlockTitle data-testid={"title"}>{title}</BlockTitle>
            <BlockValue data-testid={"value"}>{value}</BlockValue>
        </Block>
    );
};

export default BookStatisticBlock;
