import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "../../../src/index.css";
import {BsArrowLeftShort} from 'react-icons/bs';
import Comments from '../Comments';
import CommentForm from '../Comments/CommentForm';
import {RiEditBoxLine} from 'react-icons/ri';
import {HiDownload} from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteImage, getTheImage, updateImage } from '../../store/images';
import { getAllComments } from '../../store/comments';
import AlbumFormModal from '../Album';


const SinglePhoto = () => {

  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const singlePhoto = useSelector((state) => state.image)
  const date = new Date(singlePhoto.createdAt)
  const [descriptionEdit, setDescriptionEdit] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();
  const [photoEdit, setPhotoEdit] = useState(false);
  const [showPhotoEditForm, setShowPhotoEditForm] = useState(false);
  const [title, setTitle] = useState(singlePhoto.title);
  const [errors, setErrors] = useState([]);
  const [description, setDescription] = useState(singlePhoto.description);
  const [render, setRender] = useState(false)
  const commentsObject = useSelector((state) => state.comment)
  const comments = Object.values(commentsObject);

  useEffect(() => {
    dispatch(getTheImage(id));
}, [dispatch, id, render]);

useEffect(() => {
  dispatch(getAllComments(id));
}, [dispatch, render]);


  const DeleteThisImage = (id) => {
    dispatch(deleteImage(id));
    alert("You have permanently deleted this photo.")
    history.push("/photos")
  }

  const photoEditMenu = (
    <div className="photo-edit-content">
      <div className="photo-edit-dropdown">
        <button className="photo-edit-delete" onClick={(e) => DeleteThisImage(id)}>Delete</button>
      </div>
      <div className="photo-edit-arrow"></div>
    </div>
  )

  const handleSubmit =  async (e) => {
    e.preventDefault();

    const updatedPhoto = {
      id,
      title,
      description
    };

    await dispatch(updateImage(updatedPhoto))
    setShowPhotoEditForm(false)
    setRender(!render)
    setDescriptionEdit(false)

  };

  const uploadedOn = (date) => {
    const rawDate = date.toString().split(" ");
    const rawMonth = rawDate[1];
    let month;
    if (rawMonth === "Jan") month = "January"
    if (rawMonth === "Feb") month = "Feburary"
    if (rawMonth === "Mar") month = "March"
    if (rawMonth === "Apr") month = "April"
    if (rawMonth === "May") month = "May"
    if (rawMonth === "Jun") month = "June"
    if (rawMonth === "Jul") month = "July"
    if (rawMonth === "Aug") month = "August"
    if (rawMonth === "Sep") month = "September"
    if (rawMonth === "Oct") month = "October"
    if (rawMonth === "Nov") month = "November"
    if (rawMonth === "Dec") month = "December"

    const newDate = month + " " + rawDate[2] + " " + rawDate[3]
    return newDate;
  }

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
            <div onClick={(e) => setPhotoEdit(!photoEdit)}><RiEditBoxLine/></div>
            <div><a href={singlePhoto?.imageUrl} target="_blank" download={singlePhoto?.title}><HiDownload/></a></div>
            {photoEdit && photoEditMenu}
          </div>
        </div>
        <div className="photo-description">
          <div className="description-left-column">
            <div className="top-left">
              <div className="avatar avatar-div">
              </div>
              <div className="photo-info">
                <div className="session-user-name">{sessionUser.name}</div>
                {showPhotoEditForm === false ?
                <div className="info-shadow" onClick={(e) => setShowPhotoEditForm(true)} onMouseEnter={(e) => setDescriptionEdit(true)} onMouseLeave={(e) => setDescriptionEdit(false)}>
                  <div className="title-and-edit">
                    <div id="photo-title">{singlePhoto.title ? singlePhoto.title : "Add Title"}</div>
                    {descriptionEdit ? <button id="photo-edit" onClick={(e) => setShowPhotoEditForm(true)}><RiEditBoxLine/></button> : <button id="photo-edit"></button>}
                  </div>
                  <div className="photo-description-label">{singlePhoto.description}</div>
                </div> : 
                <form className="info-shadow-edit" onSubmit={handleSubmit}>
                  <div className="title-and-edit-form">
                    <div>
                    <input
                      type='text'
                      placeholder={singlePhoto.title}
                      defaultValue={singlePhoto.title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="photo-title-input"
                    />
                    </div>
                    <div>
                    <textarea
                      type='text'
                      placeholder={singlePhoto.description}
                      defaultValue={singlePhoto.description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="photo-description-input"
                      />
                      </div>
                      <div>
                      <button className="photo-edit-form-button" type='submit'>Done</button>
                      </div>
                  </div>
                </form> }
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
                {comments.length === 1 ?
                <div className="comment-count">
                  <div>{comments.length}</div>
                  <div>comment</div>
                </div> :
                  <div className="comment-count">
                    <div>{comments.length}</div>
                  <div>comments</div>
                </div> }
              </div>
              <div className="photo-info-right">
                <div>Uploaded on {uploadedOn(date)}</div>
              </div>
            </div>
            <div className="photo-album-info">
              <p>This photo is currently not in any albums</p>
              <div><AlbumFormModal singlePhoto={singlePhoto}/></div>
            </div>
          </div>
        </div>
    </div>
  );
};
export default SinglePhoto;
