const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

const initialData = [
  {
    id: "1",
    title: "7 Habbits of highly effectiv people",
    author: "Stephen covey",
  },
  {
    id: "2",
    title: "Thinking fast and slow",
    author: "Daniel Kahneman",
  },
  {
    id: "3",
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
