import React from "react";
import BookContextProvider from "./contexts/BookContext.jsx";

import Navbar from "./components/Navbar.jsx";
import BookList from "./components/BookList.jsx";
import BookForm from "./components/BookForm.jsx";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
