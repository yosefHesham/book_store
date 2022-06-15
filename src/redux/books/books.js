import { v4 } from 'uuid';

const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

const initialData = [
  {
    id: v4(),
    title: "7 Habbits of highly effectiv people",
    author: "Stephen covey",
  },
  {
    id: v4(),
    title: "Thinking fast and slow",
    author: "Daniel Kahneman",
  },
  {
    id:  v4(),
    title: "Deep Work",
    author: "Cal newport",
  },
];
export default function booksReducer(state = initialData, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.bookId)];
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});
