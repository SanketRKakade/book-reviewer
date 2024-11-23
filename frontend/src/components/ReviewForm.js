import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ bookId }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/reviews", { bookId, reviewText, rating });
      alert("Review submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit review");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
        className="border p-2 rounded mb-2"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        className="border p-2 rounded mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
