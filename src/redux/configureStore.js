import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const bookStoreReducer = combineReducers(
  {
    categories: categoriesReducer,
    books: booksReducer,
  },
);

const store = createStore(bookStoreReducer,applyMiddleware(thunk));

export default store;
