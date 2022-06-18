import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetch } from '../redux/books/books';
import AddBook from './add_book';
import Book from './book';

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  let firstFetch = false;
  React.useEffect(() => {
    if (firstFetch) {
      return;
    }
    dispatch(asyncFetch());
    firstFetch = true;
  }, []);

  return (
    <div className="books-wrapper d-flex">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
          category={book.category}
        />
      ))}
      <hr />
      <AddBook />
    </div>
  );
};

export default BookList;
