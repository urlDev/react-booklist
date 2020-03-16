import React from 'react';
import BookContextProvider from './contexts/BookContext.jsx'

import Navbar from "./components/Navbar.jsx"
import BookList from "./components/BookList.jsx"

function App() {
  return (
    <div className="App">
      <BookContextProvider>
      <Navbar/>
      <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
