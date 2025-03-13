


import React, { useState } from 'react';  
import '../css/AddStudent.css';
import axios from 'axios';

function AddStudent() {
    const [username, setUsername] = useState('');
    const [roll, setRoll] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  
    const [successMessage, setSuccessMessage] = useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!roll || !username || !grade || !password) {
            setError('All fields are required!');
            return;
        }

        
        axios.post('http://localhost:3001/student/register', { roll, username, grade, password })
            .then(res => {
                console.log(res);  
                setSuccessMessage('Student registered successfully!');
                setError(''); 
                
                setRoll('');
                setUsername('');
                setGrade('');
                setPassword('');
            })
            .catch(err => {
                console.log(err);  
                setError('Error in registering student');
                setSuccessMessage(''); 
            });
    };

    return (
        <div className="student-form-container">
            <form className="student-form" onSubmit={handleSubmit}>
                <h2>Add Student</h2>

                {error && <div className="error-message">{error}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <label htmlFor="roll">Roll No:</label>
                    <input
                        type="text"
                        id="roll"
                        name="roll"
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Grade:</label>
                    <input
                        type="text"
                        id="grade"
                        name="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default AddStudent;
