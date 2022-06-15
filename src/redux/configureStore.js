import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const bookStoreReducer = combineReducers(
  {
    categories: categoriesReducer,
    books: booksReducer,
  },
);

const store = createStore(bookStoreReducer);

export default store;
