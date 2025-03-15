import React, { useState, useEffect } from 'react';  
import '../css/AddStudent.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate(); 
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/book/book/${id}`)
      .then((res) => {
        setName(res.data.name);
        setAuthor(res.data.author);
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/book/book/${id}`, { name, author, imageUrl })
      .then((res) => {
        if (res.data.updated) {
          navigate('/books');
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Edit Book</h2>

        <div className="form-group">
          <label htmlFor="book">Book Name:</label>
          <input
            type="text"
            placeholder="Enter Book Name"
            id="book"
            name="book"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            placeholder="Enter Author Name"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            placeholder="Enter image URL"
            id="image"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditBook;
