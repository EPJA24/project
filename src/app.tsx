import React from 'react';
import MainPage from "./components/mainPage";
import {Image} from "./components/image";
import {Logo} from "./components/logo";
import {BookList} from "./components/bookList";
import {AddBookButton} from "./components/addButton";
import {MobileImage} from "./components/mobileImage";

const App = () => {
  return (
      <div style={{backgroundColor: "black", height: '100vh'}}>
        <MainPage />
        <Image />
        <Logo />
        <AddBookButton />
        <BookList />
        <MobileImage />
      </div>);

};

export default App;

