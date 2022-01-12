import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as imageActions from '../../store/images'
import { useHistory, NavLink, Route } from 'react-router-dom';
import PhotoEditForm from "../PhotoEditForm";

function EditButton ({ singlePhoto }) {

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

    const editMenu = document.getElementById("edit-button");

    editMenu.addEventListener('click', closeMenu);

    return () => editMenu.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(imageActions.deleteImage(singlePhoto)).then(() => history.push("/photos"))
  };

  return (
    <>
      <button id="edit-button" onClick={openMenu}>
        <i className="fas fa-camera-retro" />
      </button>
      {showMenu && (
        <div className="photo-edit-delete-form">
            <PhotoEditForm singlePhoto={singlePhoto}/>
            <button><NavLink to={`/photos/${singlePhoto.id}/edit`}>Edit</NavLink></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
      )}
         <Route path="photos/:id/edit">
            <PhotoEditForm singlePhoto={singlePhoto}/>
        </Route>
    </>
  );
}

export default EditButton;
