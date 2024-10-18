import React from 'react';
import { Modal, ModalCloseTrigger, ModalContent, ModalHeader, ModalTitle } from '../../Modal/Modal';
import Button from '../../ui/button/Button';
import { Comments, Form } from './styles/ReviewModal.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface ReviewModalProps {
    handleClose: () => void;
}

const schema = z.object({
    comment: z.string().min(1, 'Comment required')
});

type CommentType = z.infer<typeof schema>;

const ReviewModal = ({ handleClose }: ReviewModalProps) => {
    const { register, handleSubmit, reset } = useForm<CommentType>({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        resolver: zodResolver(schema)
    });

    const addReview: SubmitHandler<CommentType> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <Modal modalId="ReviewModal">
            <ModalHeader>
                <ModalTitle>Add review for book</ModalTitle>
                <ModalCloseTrigger onClick={handleClose} />
            </ModalHeader>
            <ModalContent>
                <Form onSubmit={handleSubmit(addReview)}>
                    <Comments
                        placeholder="Add some comments about this book..."
                        {...register('comment')}
                    />
                    <Button primary type="submit">
                        Finish
                    </Button>
                </Form>
            </ModalContent>
        </Modal>
    );
};

export default ReviewModal;
