import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as imageActions from '../../store/images'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import PhotoEditForm from '../PhotoEditForm';

const SinglePhoto = () => {

  const sessionUser = useSelector(state => state.session.user);
  const imagesObject = useSelector((state) => state.image)
  const images = Object.values(imagesObject);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const singlePhoto = images.find((image) => image.id === +id);
  const [showMenu, setShowMenu] = useState(false);

  const openCloseMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(imageActions.deleteImage(singlePhoto)).then(() => history.push("/photos"))
  };

  return (
    <div className="single-photo-page">
        <div className='single-photo-container'>
            <NavLink to="/photos">
              <i className="arrow left"></i>
               Back to photostream</NavLink>
            <div className="single-photo-container-container">
              <img className="single-photo-page-photo" src={singlePhoto?.imageUrl} alt={singlePhoto?.description} />
            </div>
            <button id="edit-photo-button" onClick={openCloseMenu}>
                <i className="fas fa-camera-retro" />
            </button>
        </div>
        <div className="photo-description">
            <div className="photo-avatar-container"></div>
            <div className="photo-description-text">
                <h2>Hei, {sessionUser.name}</h2>
                <p>{singlePhoto.description}</p>
            </div>
        </div>
        {showMenu && (
            <div className="photo-edit-delete-form">
                <PhotoEditForm singlePhoto={singlePhoto}/>
            </div>
        )}
    </div>
  );
};
export default SinglePhoto;
