import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import "../../../src/index.css";


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/photos" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoLogin = () => (
    <button
      className="demo-button"
      onClick={(e) => {
        setCredential('jan@user.io');
        setPassword('password');
      }}
    >Demo Login
    </button>
  )

  return (
    <div className="login-form-page">
    <div className="login-form-container">
    <form onSubmit={handleSubmit}>
    <div className="flimmr-signup-logo"><img src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1641936934/Flimmr/Flimmr-icon_krefkq.png"}/></div>
    <h1>Log in to flimmr</h1>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        <input
          type="text"
          placeholder="Username or Email address"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button id="login-submit-button" type="submit">Log In</button>
      {demoLogin()}
      <p className="login-signup-link">Not a Flimmr member?
      <NavLink id="login-signup-link-link"to="/signup"> Sign up here.</NavLink></p>
    </form>
    </div>
    </div>
  );
}

export default LoginFormPage;
