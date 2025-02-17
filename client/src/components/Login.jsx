import React from 'react'
import '../css/Login.css'

function Login() {
  return (
    <div className = 'login-page'>
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type = "text" placeholder ="Enter Username"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type = "text" placeholder ="Enter Password"/>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role">
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className='btn-login'>Login</button>
      </div>
    </div>
  )
}

export default Login
