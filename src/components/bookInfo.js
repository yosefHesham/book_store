import PropTypes from 'prop-types';
import React from 'react';

const bookActions = [
  {
    id: 1,
    text: 'Comments',
  },
  {
    id: 2,
    text: 'Remove',
  },
  {
    id: 3,
    text: 'Edit',
  },
];
const buttonStyle = {
  backgroundColor: 'white',
  border: 'none',
  color: '#4386bf',
  cursor: 'pointer',
  textDecoration: 'underline',
};
const BookInfo = (props) => {
  const {
    title, author, category, handleDelete,
  } = props;

  return (
    <section className="bookInfo">
      <p className="category">{category}</p>
      <h3 className="title">
        {' '}
        {title}
        {' '}
      </h3>
      <p className="author">
        {' '}
        {author}
        {' '}
      </p>
      <article className="actions d-flex">
        {bookActions.map((action) => (
          <button type="button" key={action.id} style={buttonStyle} onClick={action.text === 'Remove' ? handleDelete : () => {}}>
            {action.text}
          </button>
        ))}
      </article>
    </section>
  );
};

BookInfo.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookInfo;
