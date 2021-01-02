import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
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
    // e.preventDefault();

    // Authorization.register(email, password)
    //   .then((res, err) => {
    //     if (!res || res.statusCode === 400) {
    //       throw new Error(err)
    //     };
    //     return res;
    //   })
    //   .then(resetForm)
    //   .then(() => {
    //     history.push('/login')
    //   })
    //   .catch(err => setMessage(err.message))
  }

  useEffect(() => {
    if(localStorage.getItem('jwt')) {
      history.push('/ducks')
    }
  }, [])

  return (
    <div className="register">
      <p className="register__header">
        Sign Up
      </p>
      <p className="register__error">
        {message}
      </p>
      <form onSubmit={handleSubmit} className="register__form form">
        <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="register__button button">Sign up</button>
      </form>
      <div className="register__login">
        <Link to="Login" className="register__login-link">Already a member?  Log in here!</Link>
      </div>
    </div>
  )
}