import React from "react";
import AddBook from "./add_book";
import Book from "./book";

const books = [
  {
    id: "1",
    title: "7 Habbits of highly effectiv people",
    author: "Stephen covey",
  },
  {
    id: "2",
    title: "Thinking fast and slow",
    author: "Daniel Kahneman",
  },
  {
    id: "3",
    title: "Deep Work",
    author: "Cal newport",
  },
];
const BookList = () => {
  const [list, setList] = React.useState(books);

  return (
    <div books-wrapper>
      {list.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <AddBook/>
    </div>
  );
};

export default BookList