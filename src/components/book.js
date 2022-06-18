import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { asyncRemove } from '../redux/books/books';
import BookInfo from './bookInfo';
import BookProgress from './bookProgress';
import Chapter from './chapter';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(asyncRemove(id));
  };
  return (
    <article className="book d-flex">
      <BookInfo title={title} author={author} category={category} handleDelete={handleDelete} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '70%',
        marginRight: '10%',
      }}
      >
        <BookProgress />
        <article className="line" />
        <Chapter />
      </div>
    </article>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
