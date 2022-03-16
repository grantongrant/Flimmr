import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import PhotoEditForm from '../PhotoEditForm';
import "../../../src/index.css";
import {BsArrowLeftShort} from 'react-icons/bs';
import Comments from '../Comments';
import CommentForm from '../Comments/CommentForm';

const SinglePhoto = () => {

  const sessionUser = useSelector(state => state.session.user);
  const imagesObject = useSelector((state) => state.image)
  const images = Object.values(imagesObject);
  // const dispatch = useDispatch();
  // const history = useHistory();
  const { id } = useParams();
  const singlePhoto = images.find((image) => image.id === +id);
  const [showMenu, setShowMenu] = useState(false);

  const openCloseMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };


  return (
    <div className="single-photo-page">
        <div className='single-photo-container'>
          <div className="single-icons">
            <NavLink to="/photos">
              <BsArrowLeftShort id="back-to-photostream"/>
               Back to photostream</NavLink>
            </div>
            <div className="single-photo-page-photo">
              <img src={singlePhoto?.imageUrl} alt={singlePhoto?.description} />
            </div>
        </div>
        <div className="photo-description">
          <div className="description-left-column">
            <div className="top-left">
              <div className="avatar"></div>
              <div className="photo-info">
                <div>{sessionUser.name}</div>
                <div>Title</div>
                <div>{singlePhoto.description}</div>
              </div>
            </div>
            <div className="comment-list">
              <Comments imageId={id}/>
            </div>
            <div className="add-comment-form">
              <CommentForm imageId={id} userId={sessionUser.id}/>
            </div>
          </div>
          <div className="description-right-column"></div>
            {/* <div className="photo-avatar-container"></div>
              <img className="heart-logo-photo-page" src="https://res.cloudinary.com/ddxtopm0l/image/upload/v1642106208/Flimmr/norway-heart-icon_ihdvtj.png" alt="norway-heart"/>
            <div className="photo-description-text">
                <div className="name-and-edit">
                <h2>Hei, {sessionUser.name}</h2>
                <button id="edit-photo-button" onClick={openCloseMenu}>
                  <i class="fas fa-pen"></i>
                </button>
                </div>
                <p>{singlePhoto.description}</p>
            </div> */}
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
