const  Book = (props) => {

  const {title,author,id} = props;
  return (<article className="book" style={{
    display:"flex",
    width:"60%",
    margin:"0 auto",
    justifyContent:"space-between"
  }}>
      <p>
        {title} by <span>{author}</span> 
      </p>
      <button> Delete Book </button>
    </article>);
}
export default Book