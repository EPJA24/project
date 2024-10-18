import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../lib/utils';
import { Book } from '../../lib/types';

export interface LibraryState {
    id: string;
    numberOfBooks: number;
    books: Book[];
}

const initialState: LibraryState = {
    id: generateId(),
    books: [
        {
            id: generateId(),
            bookName: 'book',
            description: '',
            bookUrl: undefined,
            isFinished: false,
            numberOfPages: 492,
            publishYear: 2017,
            rating: 4.98,
            imageSrc: undefined,
            usersReview: []
        }
    ],
    numberOfBooks: 1
};

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        deleteLibrary: (state, action: PayloadAction<string>) => {
            if (state[action.payload]) {
                delete state[action.payload];
            }
        },
        createLibrary: (state, action: PayloadAction<string>) => {
            if (!state[action.payload]) {
                state[action.payload] = {
                    id: generateId(),
                    books: [],
                    numberOfBooks: 0
                };
            }
        },
        addNewBook: (state, action: PayloadAction<{ libName: string; book: Book }>) => {
            const { libName, book } = action.payload;
            const library = state[libName];
            if (library) {
                if (!library.books.find((libBook) => libBook.bookName === book.bookName)) {
                    library.books.push(book);
                    library.numberOfBooks = library.books.length;
                }
            }
        },
        removeBook: (state, action: PayloadAction<{ libName: string; book: Book }>) => {
            const { libName, book } = action.payload;
            const library = state[libName];
            if (library) {
                if (library.books.find((libBook) => libBook.bookName === book.bookName)) {
                    delete library.books[book.bookName];
                }
                library.numberOfBooks = library.books.length;
            }
        },
        markBookComplete: (state, action: PayloadAction<string>) => {
            const index = state.books.findIndex((book) => book.bookName === action.payload);
            if (index !== -1) {
                state.books[index] = {
                    ...state.books[index],
                    isFinished: !state.books[index].isFinished
                };
            }
        }
    }
});

// Action creators are generated for each case reducer function
export const { deleteLibrary, createLibrary, addNewBook, removeBook, markBookComplete } =
    librarySlice.actions;

export default librarySlice.reducer;
