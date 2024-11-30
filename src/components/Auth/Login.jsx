import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {

  // console.log(handleLogin)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(email, password); // Call the parent component's handleLogin function with the email and password as parameters.

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="login">
        <div className="form">
          <p>Employee Management System</p>
          <form onSubmit={handleSubmit} className="login-form" >
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" required />
            <button>login</button>
            {/* <input type="submit" name="" id="" /> */}
          </form>
          <p>Made by <span style={{color:"red"}} >"Nikhil Khemani"</span></p>
        </div>
      </div>
    </>
  )
}

export default Login