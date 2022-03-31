import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import * as imageActions from "../../store/images";
import { csrfFetch } from "../../store/csrf";
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { getAllImages } from '../../store/images';
import { getAllImagesFromUser } from '../../store/images';


import "../../../src/index.css";

const PhotoInputForm = () => {

  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser?.id;
  const imagesObject = useSelector((state) => state.image)
  const images = Object.values(imagesObject);
  // const sessionImages = images.filter((image) => image.userId === sessionUser.id)
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const numOfPhotos = images.length;
  const [isLoaded, setIsLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect( () => {
    dispatch(getAllImagesFromUser(userId));
}, [dispatch, userId]);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
});


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true)


    const newPhoto = {
      userId,
      image,
    };
    
    await dispatch(imageActions.createImage(newPhoto))
    .then(() => setLoading(false))
    .then(() => alert("Successfully added!"))
    .then(() => history.push("/photos"))
    .catch (async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors)
    })
};

  const selectedFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  }

  return (
    <>
    {isLoaded && 
    <div className="upload-page">
    <div className='upload-container'>
      {loading ? <div className="loading"></div> : <div className="not-loading"></div> }
      {numOfPhotos < 10 ?
      <form onSubmit={handleSubmit}>
        {10 - numOfPhotos === 1 ? 
        <p className="upload-text">You can upload 1 more photo.</p> :
        <p className="upload-text">You can upload {10 - numOfPhotos} more photos.</p> }
        <div className="upload-verification">{image ? <BsFillCheckCircleFill/>: null}</div>
        <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        {image ? 
        <div className="upload-image-name">{image.name}</div> :
        <label id="label-for-upload">
        <input
          type='file'
          accept='image/*'
          onChange={selectedFile}
          id="upload-button"
        />
        <span>Choose photo to upload</span>
        </label> }
        <button id="upload-submit-button" type='submit'>Submit</button>
        <p className="upload-link-a">Not Ready?
      <NavLink className="upload-link-b"to="/photos"> Back to photostream.</NavLink></p>
      </form> :
      <div>
        <p className="upload-text">You can't upload any more photos!</p> 
        <p className="upload-text-two">Please delete one or more of your photos and try again.</p>
        <NavLink to="/photos"><button id="upload-submit-button">Back to photostream</button></NavLink>
      </div>}
    </div>
    </div>}
    </>
  );
};
export default PhotoInputForm
;
