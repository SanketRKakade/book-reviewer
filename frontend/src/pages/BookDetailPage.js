import ReviewForm from "../components/ReviewForm";

const BookDetailPage = ({ book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <h2>Submit a Review:</h2>
      <ReviewForm bookId={book._id} />
    </div>
  );
};

export default BookDetailPage;
