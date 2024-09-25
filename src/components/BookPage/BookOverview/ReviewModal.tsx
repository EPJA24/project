import React from 'react'
import { Modal, ModalCloseTrigger, ModalContent, ModalHeader, ModalTitle } from '../../Modal/Modal';
import Button from '../../ui/button/Button';
import { Comments, Form } from './styles/ReviewModal.styled';
import RatingBar from './RatingBar';

interface ReviewModalProps {
  handleClose: () => void;
}

const ReviewModal = ({handleClose}: ReviewModalProps) => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <Modal width={410} height={420} modalId='ReviewModal'>
      <ModalHeader>
        <ModalTitle>Rate this book</ModalTitle>
        <ModalCloseTrigger onClick={handleClose} />
      </ModalHeader>
      <ModalContent>
        <Form onSubmit={handleSubmit}>
          <RatingBar />
          <Comments placeholder='Add some comments about this book...' />
          <Button primary type='submit'>Finish</Button>
        </Form>
      </ModalContent>
    </Modal>
  )
}

export default ReviewModal