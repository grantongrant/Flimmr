import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import PhotoEditForm from '../PhotoEditForm';
import "../../../src/index.css";
import {BsArrowLeftShort} from 'react-icons/bs';
import Comments from '../Comments';
import CommentForm from '../Comments/CommentForm';
import {RiEditBoxLine} from 'react-icons/ri';
import {HiDownload} from 'react-icons/hi';

const SinglePhoto = () => {

  const sessionUser = useSelector(state => state.session.user);
  const imagesObject = useSelector((state) => state.image)
  const images = Object.values(imagesObject);
  // const dispatch = useDispatch();
  // const history = useHistory();
  const { id } = useParams();
  const singlePhoto = images.find((image) => image.id === +id);

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
          <div className="photo-edit-icon">
            <div><RiEditBoxLine/></div>
            <div><a href={singlePhoto?.imageUrl} target="_blank" download={singlePhoto?.title}><HiDownload/></a></div>
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
          <div className="description-right-column">
            <div className="additional-photo-info">
              <div className="photo-info-left">
                <div className="view-count">
                  <div>2</div>
                  <div>views</div>
                </div>
                <div className="comment-count">
                  <div>3</div>
                  <div>comments</div>
                </div>
              </div>
              <div className="photo-info-right">
                <div>Uploaded on Date</div>
              </div>
            </div>
            <div className="photo-album-info">
              <p>This photo is currently not in any albums</p>
              <p>Add to Album</p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default SinglePhoto;
