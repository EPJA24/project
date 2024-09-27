import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import pkg from "../package.json";

const BookPage = lazy(() => import('./pages/BookPage/BookPage'))

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={`/${pkg.name}/:bookId`} element={<BookPage />}/>
      </Routes>
    </Suspense>
  );
};

export default App;

