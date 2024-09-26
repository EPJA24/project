import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import pkg from "../package.json";

const BookPage = lazy(() => import('./pages/BookPage/BookPage'))

const App = () => {
  return (
    <Routes>
      <Route path={`/${pkg.name}/:libraryId/:bookId`} element={<BookPage />}/>
    </Routes>
  );
};

export default App;

