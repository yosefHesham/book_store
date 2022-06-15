import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { asyncRemove } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(asyncRemove(id));
  };
  return (
    <article
      className="book"
      style={{
        display: 'flex',
        width: '60%',
        margin: '0 auto',
        justifyContent: 'space-between',
      }}
    >
      <p>
        {title}
        {' '}
        by
        {' '}
        <span>{author}</span>
      </p>
      <button onClick={handleDelete} type="button"> Delete Book </button>
    </article>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
