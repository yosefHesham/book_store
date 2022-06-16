import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetch } from '../redux/books/books';
import AddBook from './add_book';
import Book from './book';

const BookList = () => {
  const dispatch = useDispatch();

  React.useEffect(() => { dispatch(asyncFetch()); }, []);
  const books = useSelector((state) => state.books);

  return (
    <div className="books-wrapper">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
          category={book.category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
