import React from 'react';
import Welcome from "./welcome";
import {Image} from "./image";
import {Logo} from "./logo";
import {BookList} from "./bookList";
import {AddBookButton} from "./addButton";
import {MobileImage} from "./mobileImage";


const MainPage = () => {
    return (
        <div style={{backgroundColor: "black", height: '100vh'}}>
          <Welcome />
          <Image />
          <Logo />
          <AddBookButton />
          <BookList />
          <MobileImage />
        </div>);
};

export default MainPage;