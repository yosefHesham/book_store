import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { asyncAdd } from '../redux/books/books';

const formStyle = {
  width: '100%',
  margin: '10px auto',
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: '15px',
};
const AddBook = () => {
  const [formState, setFormState] = React.useState({ title: '', author: '' });

  const { title, author, category } = formState;
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
    dispatch(
      asyncAdd({
        item_id: v4(),
        title,
        author,
        category: category,
      }),
    );
    setFormState({ title: '', author: '', category: '' });
  };
  return (
    <>
      <h4
        style={{
          marginTop: '2%',
          marginBottom: '2%',
          marginLeft: '10%',
        }}
      >
        ADD NEW BOOK
      </h4>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          className="title-input input"
          type="text"
          name="title"
          placeholder="Book title"
          value={title}
          onChange={handleChange}
        />
        <input
          className="author-input input"
          type="text"
          name="author"
          placeholder="Book author"
          value={author}
          onChange={handleChange}
        />
         <input
          className="category-input input"
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={handleChange}
        />
        <button type="submit" className="input-submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBook;
