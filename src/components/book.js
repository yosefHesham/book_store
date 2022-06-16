import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { asyncRemove } from "../redux/books/books";
import BookInfo from "./bookInfo";
import BookProgress from "./bookProgress";

const Book = (props) => {
  const { id, title, author, category } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(asyncRemove(id));
  };
  return (
    <article className="book">
      <BookInfo title={title} author={author} category={category}></BookInfo>
      <BookProgress></BookProgress>
    </article>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
