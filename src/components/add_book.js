import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook, asyncAdd } from '../redux/books/books';

const AddBook = () => {
  const [formState, setFormState] = React.useState({ title: '', author: '' });

  const { title, author } = formState;
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || author.trim().length === 0) {
      return;
    }
    dispatch(asyncAdd({ item_id: v4(), title, author,category:"Not classified yet"}));
    setFormState({ title: '', author: '' });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '50%', margin: '10px auto', display: 'flex', flexDirection: 'column',
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Book title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Book author"
        value={author}
        onChange={handleChange}
      />
      <button type="submit" className="input-submit">
        Submit
      </button>
    </form>
  );
};



export default AddBook;
