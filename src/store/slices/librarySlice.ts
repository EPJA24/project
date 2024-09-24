import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { generateId } from '../../lib/utils';
import { Book } from '../../lib/types';

export interface LibraryState {
  id: string;
  libraryName: string;
  numberOfBooks: number;
  books: Book[];
}

const initialState: Map<String, LibraryState> = new Map();

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    deleteLibrary: (state, action: PayloadAction<string>) => {
      if (state.has(action.payload)) {
        state.delete(action.payload)
      }
    },
    createLibrary: (state, action: PayloadAction<string>) => {
      if (!state.has(action.payload)) {
        state.set(action.payload, 
          {
            id: generateId(), 
            libraryName: action.payload, 
            books: [],
            numberOfBooks: 0,
          }
        )
      }
    },
    addNewBook: (state, action: PayloadAction<{libName: String, book: Book}>) => {
      const { libName, book } = action.payload;
      const library = state.get(libName);
      if (library) {
        if (!library.books.find((libBook) => libBook.id === book.id)) {
          library.books.push(book);
          library.numberOfBooks = library.books.length;
        }
      }
    },
    removeBook: (state, action: PayloadAction<{libName: String, book: Book}>) => {
      const { libName, book } = action.payload;
      const library = state.get(libName);
      if (library) {
        library.books = library.books.filter((libBook) => libBook.bookName !== book.bookName)
        library.numberOfBooks = library.books.length;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteLibrary, createLibrary, addNewBook, removeBook } = librarySlice.actions

export default librarySlice.reducer