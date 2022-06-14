import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
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
        <span>{author}</span>
      </p>
      <button type="button"> Delete Book </button>
    </article>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
