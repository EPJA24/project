import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import pkg from "../package.json";
import Registration from "./pages/RegistrationPage/RegistrationPage";

const BookPage = lazy(() => import("./pages/BookPage/BookPage"));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={`/${pkg.name}/registration`} element={<Registration />} />
        <Route
          path={`/${pkg.name}/:libraryId/:bookId`}
          element={<BookPage />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
