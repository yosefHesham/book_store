import { v4 } from 'uuid';
import {deleteBook, fetchBooks,  sendBook } from "../../api_helper"

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOKS = "FETCH_BOOKS";

const initialData = [
  {
    id: v4(),
    title: '7 Habbits of highly effectiv people',
    author: 'Stephen covey',
  },
  {
    id: v4(),
    title: 'Thinking fast and slow',
    author: 'Daniel Kahneman',
  },
  {
    id: v4(),
    title: 'Deep Work',
    author: 'Cal newport',
  },
];
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.bookId)];
   case FETCH_BOOKS:
     return [...action.books]   
    default:
      return state;
  }
}

 const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});


 const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const fetchBooksAction = (books) => ({
  type: FETCH_BOOKS,
  books
})

export const asyncFetch = () =>  async (dispatch) => {

  const books = await fetchBooks();
  dispatch(fetchBooksAction(books))

}
export const asyncAdd = (book) => async (dispatch) => {
   await sendBook(book)
  dispatch(addBook(book))
}
