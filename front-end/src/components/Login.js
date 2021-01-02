import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
// import Logo from './Logo.js';
// import * as Auth from '../Auth.js';

export default function Login({handleLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    // authorize(email, password)
    //   .then((data) => {
    //     if (!data) {
    //       throw new Error("No such user")
    //     }
    //     if (data.jwt) {
          
    //     }
    //   })
  }

  return (
    <div className="login">
      <p className="login__header">
        Sign Up
      </p>
      <p className="login__error">
        {message}
      </p>
      <form onSubmit={handleSubmit} className="login__form form">
        <input required id="email" name="email" type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
        <input required id="password" placeholder="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="button__submit button">Sign up</button>
      </form>
      <div className="register__login">
        <Link to="Login" className="register__login-link">Already a member?  Log in here!</Link>
      </div>
    </div>
  )
}