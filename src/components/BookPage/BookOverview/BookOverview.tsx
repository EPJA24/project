import React, { useState } from "react";

import ImageFiller from "react-image-filler";
import { Check, Forward, Star } from "lucide-react";
import { useLocation } from "react-router-dom";

import {
  BookOverviewContainer,
  ImageContainer,
  BookTitle,
  Controls,
} from "./styles/BookOverview.styled";
import BookStatistics from "./BookStatistics";
import Button from "../../ui/button/Button";
import useModal from "../../../hooks/useModal";
import ReviewModal from "./ReviewModal";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { markBookComplete } from "../../../store/slices/librarySlice";

const BookOverview = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const book = useAppSelector((state) =>
    state.librarySlice.books.find((libBook) => libBook.bookName === "book")
  );
  const [isCopied, setIsCopied] = useState(false);
  const { isOpen, handleClose, handleOpen } = useModal();

  const copyClipboard = () => {
    navigator.clipboard.writeText(`${location.pathname}`);
    setIsCopied(true);
    const timeout = setTimeout(() => setIsCopied(false), 1000);
  };

  const markAsRead = () => {
    dispatch(markBookComplete(book.bookName));
  };

  return (
    <BookOverviewContainer>
      <ImageContainer>
        {book.imageSrc ? (
          <img
            src={book.imageSrc}
            alt="book image"
            style={{ borderRadius: "10px" }}
          />
        ) : (
          <ImageFiller
            width={350}
            height={520}
            color="black"
            background="white"
            style={{ borderRadius: "10px" }}
          />
        )}
        <BookTitle $primary>{book.bookName}</BookTitle>
      </ImageContainer>
      <BookStatistics
        numberOfPages={book.numberOfPages}
        rating={book.rating}
        publishYear={book.publishYear}
      />
      <Controls>
        <Button icon={<Forward />} onClick={copyClipboard} disabled={isCopied}>
          {isCopied ? "Copied" : "Share"}
        </Button>
        <Button icon={<Check />} onClick={markAsRead}>
          {book.isFinished ? "Mark as unread" : "Mark as read"}
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
