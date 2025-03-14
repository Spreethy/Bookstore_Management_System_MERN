


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../css/Book.css';

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);  

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        console.log("API Response:", res.data);  

        if (Array.isArray(res.data)) {
          setBooks(res.data);  
        } else if (res.data && res.data.books) {
          setBooks(res.data.books);
        } else {
          setBooks([]);  
        }
      })
      .catch(err => {
        console.log('Error fetching books:', err);  
        setBooks([]);  
      });
  }, []);  

  return (
    <div className="book-list">
      {Array.isArray(books) && books.length > 0 ? (
        books.map(book => (
          <BookCard key = {book.id} book = {book}></BookCard>
 
  
        ))
      ) : (
        <p>No books available</p>  
      )}
    </div>
  );
};

export default Books;
