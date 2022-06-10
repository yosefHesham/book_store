import React from "react";

const AddBook = () => {
  const [formState, setFormState] = React.useState({ title: "", author: "" });

  const { title, author } = formState;
  return (
    <form style={{width:"50%", margin:"10px auto", display:"flex", flexDirection:"column"}}>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        value={title}
      ></input>
      <input
        type="text"
        name="author"
        placeholder="Book author"
        value={author}
      ></input>
      <button type="submit" className="input-submit">
        Submit
      </button>
    </form>
  );
};

export default AddBook