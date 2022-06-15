import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books.js';
import categoriesReducer from './categories/categories';


const bookStoreReducer = combineReducers(
  {
    categories:categoriesReducer,
  books:booksReducer,
  }
);

const store = createStore(bookStoreReducer);

export default store;
