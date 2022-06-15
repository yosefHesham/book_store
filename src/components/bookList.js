import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './add_book';
import Book from './book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books-wrapper">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
