import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import '../../../src/index.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <nav className="login-signup">
        <NavLink to="/login"><button id="log-in-button">Log In</button></NavLink>
        <NavLink to="/signup"><button id="sign-up-button">Sign Up</button></NavLink>
      </nav>
    );
  }

  return (
      <header className="navigation-header">
            <div className="global-logo">
            <NavLink id="logo-font" exact to="/"><img id="logo-png" src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1641938203/Flimmr/Flimmr-icon_cb79be.png"}/></NavLink>
            </div>
            {sessionUser ?
            <div className="global-search">
              <NavLink className="global-links" to="/photos">You</NavLink>
              <NavLink className="global-links" to="/explore">Explore</NavLink>
            </div> :
            <div className="global-search">
            </div>}
            {isLoaded && sessionLinks}
      </header>

  );
}

export default Navigation;
