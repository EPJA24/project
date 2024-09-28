import React from 'react';
import MainPage from "./components/mainPage";
import {Image} from "./components/image";
import {Logo} from "./components/logo";
import {BookList} from "./components/bookList";
import books from "../stubs/api/books.json";


const App = () => {
  return (
      <div style={{backgroundColor: "black", height: `${100 + (Object.keys(books).length - 1) * 15}vh`}}>
        <MainPage />
        <Image />
        <Logo />
        <BookList />

      </div>);

};

export default App;

