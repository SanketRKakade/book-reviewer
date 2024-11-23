const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const connectDB = require("./config/dbconfig");
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);
app.use('/users', userRoutes);

const PORT = 3500
connectDB()

// mongoose.connection.once THIS  FUNCTION RUN ON THE PORT ONLY WHEN THE DATABASE IS CONNECTED OTHERWISE SERVER IS NOT START ON THE PORT
mongoose.connection.once("open", () =>{
    console.log("DATABASE IS CONNECTED")
    app.listen(process.env.PORT || PORT,()=>{
        console.log(`Server is up and running on port ${PORT}`)
    })
 }
)

app.post("/api/reviews", async (req, res) => {
    try {
      const { bookId, userId, reviewText, rating } = req.body;
      const review = new Review({ book: bookId, user: userId, text: reviewText, rating });
      await review.save();
  
      const book = await Book.findById(bookId);
      book.reviews.push(review._id);
      await book.save();
  
      res.status(201).json({ success: true, review });
    } catch (error) {
      res.status(500).json({ error: "Failed to submit review" });
    }
  });

  app.get("/api/books", async (req, res) => {
    try {
      const books = await Book.find(); // Fetch books from MongoDB
      res.json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Failed to fetch books" });
    }
  });
  
  