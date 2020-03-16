import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 }
  ]);

  const addBook = (title, author) => {
    setBooks([
      //   when we setBooks(set new state for the books)
      // we add previous state and add new books title and author
      ...books,
      { title: title, author: author, id: uuid() }
    ]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
