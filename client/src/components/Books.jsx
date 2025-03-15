


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BookCard from './BookCard';
// import '../css/Book.css';

// const Books = ({ role }) => {
//   const [books, setBooks] = useState([]);  

//   useEffect(() => {
//     axios.get('http://localhost:3001/book/books')
//       .then(res => {
//         console.log("API Response:", res.data);  

//         if (Array.isArray(res.data)) {
//           setBooks(res.data);  
//         } else if (res.data && res.data.books) {
//           setBooks(res.data.books);
//         } else {
//           setBooks([]);  
//         }
//       })
//       .catch(err => {
//         console.log('Error fetching books:', err);  
//         setBooks([]);  
//       });
//   }, []);  

//   return (
//     <div className="book-list">
//       {Array.isArray(books) && books.length > 0 ? (
//         books.map((book) => (
//           <BookCard key={book._id} book={book} role={role} />
//         ))
//       ) : (
//         <p>No books available</p>
//       )}
//     </div>
//   );
  
  
// };

// export default Books;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../css/Book.css';

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        if (Array.isArray(res.data)) {
          setBooks(res.data);
        } else if (res.data && res.data.books) {
          setBooks(res.data.books);
        } else {
          setBooks([]);
        }
      })
      .catch(err => {
        setBooks([]);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="book-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} role={role} />
        ))
      ) : (
        <p>No books found matching your search</p>
      )}
    </div>
  );
};

export default Books;
