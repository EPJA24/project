import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import pkg from "../package.json";
import Registration from './pages/RegistrationPage/RegistrationPage';
import Main from './pages/MainPage/MainPage';

const BookPage = lazy(() => import('./pages/BookPage/BookPage'))

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={`/${pkg.name}/mybook/:bookId`} element={<BookPage />}/>
        <Route path={`/${pkg.name}/registration`} element={<Registration />} />
        <Route path={`/${pkg.name}/mybook`} element={<Main />} />
      </Routes>
    </Suspense>
  );
};

export default App;

