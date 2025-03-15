import React from 'react'
import '../css/Dashboard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { bookModel } from '../../../server/models/Book'




function Dashboard() {
  const [student, setStudents] = useState(0)
  const [admin,setAdmin] = useState(0)
  const [book,setBooks] = useState(0)

  useEffect(() => {
  axios.get('http://localhost:3001/dashboard')
    .then(res => {
      console.log(res.data); 
      if (res.status === 200 && res.data) {
        setStudents(res.data.student);
        setAdmin(res.data.admin);
        setBooks(res.data.book);
      } else {
        console.error('Error fetching dashboard data');
      }
    })
    .catch(err => console.log(err));
}, []);

useEffect(() => {
  console.log({ student, admin, book });
}, [student, admin, book]);

  return (
    <div className='dashboard'>
      <div className="dashboard-box">
        <h2>Total Books</h2> <br/>
        <h2>{book}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2> <br/>
        <h2>{student}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admin</h2> <br/>
        <h2>{admin}</h2>
      </div>
    </div>
  )
}

export default Dashboard