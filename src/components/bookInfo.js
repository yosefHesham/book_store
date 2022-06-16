import React from "react";

const bookActions = [
  {
    id: 1,
    text: "Comments",
  },
  {
    id: 2,
    text: "Remove",
  },
  {
    id: 3,
    text: "Edit",
  },
];
const buttonStyle = {
  backgroundColor: "white",
  border: "none",
  color: "#4386bf",
  cursor: "pointer",
  textDecoration: "underline",
};
const BookInfo = (props) => {
  const { title, author, category } = props;

  return (
    <section className="bookInfo">
      <p className="category">{category}</p>
      <h3  className="title"> {title} </h3>
      <p className="author"> {author} </p>
      <article className="actions">
        {bookActions.map((action) => (
          <button key={action.id} style={buttonStyle}>
            {action.text}
          </button>
        ))}
      </article>
    </section>
  );
};

export default BookInfo;