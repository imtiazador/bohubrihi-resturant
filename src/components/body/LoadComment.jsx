// import dateFormat from "date-format";
const LoadComment = ({ comment }) => {
  // console.log(comment);
  const preview = comment.map((c) => {
    return (
      <div key={c.id}>
        <h5>{c.author}</h5>
        <p>{c.comment}</p>
        <p>Rating: {c.rating}</p>
      </div>
    );
  });
  return <div>{preview}</div>;
};

export default LoadComment;
