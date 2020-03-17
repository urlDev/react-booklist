import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState(() => {
    const initialBooks = localStorage.getItem("books");
    return initialBooks
      ? JSON.parse(initialBooks)
      : [
          { title: "name of the wind", author: "patrick rothfuss", id: 1 },
          { title: "the final empire", author: "brandon sanderson", id: 2 }
        ];
  });

  console.log(books);

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

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
