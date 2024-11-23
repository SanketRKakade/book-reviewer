const express = require('express');
const Review = require('../models/Review');
const Book = require('../models/Book');
const router = express.Router();

// GET /reviews?bookId=bookId - Get reviews for a book
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.query.bookId }).populate('user', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /reviews - Add a review
router.post('/', async (req, res) => {
  try {
    const { bookId, userId, rating, comment } = req.body;
    const review = new Review({ book: bookId, user: userId, rating, comment });
    await review.save();

    const book = await Book.findById(bookId);
    book.reviews.push(review._id);
    await book.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
