import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../components/BookCard'; 
import { getBooks } from '../redux/bookSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading books.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          < BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
