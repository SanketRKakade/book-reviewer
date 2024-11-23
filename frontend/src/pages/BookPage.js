import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../redux/bookSlice';
import { getReviews, addReview } from '../redux/reviewSlice';
import ReviewForm from '../components/ReviewForm';

const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.books);
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getBook(id));
    dispatch(getReviews(id));
  }, [dispatch, id]);

  if (!book) return <p>Loading book...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-gray-600">{book.author}</p>
      <p>{book.description}</p>
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-2">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border p-2 mb-2">
          <p>{review.content}</p>
          <p className="text-sm text-gray-600">- {review.user}</p>
        </div>
      ))}
      <ReviewForm bookId={id} onAddReview={(review) => dispatch(addReview(review))} />
    </div>
  );
};

export default BookPage;
