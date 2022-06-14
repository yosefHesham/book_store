const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

export default function  booksReducer (state = [],action)  {
  switch(action.type) {
    case ADD_BOOK:
      return [...state,action.book];  
    case REMOVE_BOOK:
        return [...state.filter(book => book.id !== action.bookId)]
    default:
      return state
  }
 
}

export const addBook = (book) => {
  return {
    type:ADD_BOOK,
    book
  }
}


export const removeBook = (bookId) => {
  return {
    type:REMOVE_BOOK,
    bookId
  
  }
}