const BookCard = ({ book }) => {
    return (
      <div className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 m-2">
        <h2 className="text-lg font-bold">{book.title}</h2>
        <p className="text-gray-700">by {book.author}</p>
        <p className="text-sm text-gray-500">{book.description}</p>
        <p className="text-yellow-500 font-semibold">Rating: {book.rating}</p>
      </div>
    );
  };
  
  export default BookCard;
  