import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory, NavLink } from 'react-router-dom';
import "../../../src/index.css"

function ProfileButton({ user }) {

  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <>
     <div className="logged-in-nav">
     <NavLink id="upload-button" to="/photos/upload"><button>
        <img src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1642078914/Flimmr/upload-icon-png_hf1aiv.png"}
        alt="upload icon"
        />
      </button></NavLink>
      <button id="logged-in-menu" onClick={openMenu}>
        <i className="fas fa-camera-retro" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>
            <button id="profile-logout-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;
