import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import React, { useState } from 'react';
import './PhotoInputForm.css';
import { useHistory, NavLink } from "react-router-dom";
// import { getAllImages } from '../../store/images';
import * as imageActions from "../../store/images";

// When only one component cares about the state, use local state, not Redux

//GOALS:
// Add an image to the redux store
// import useDispatch
// import action creator from store to create an image
// dispatch the new article to the Redux store

const PhotoInputForm = () => {

  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  console.log(userId);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhoto = {
      userId,
      imageUrl,
      description
    };

    // let createdPhoto = await dispatch(imageActions.createImage(newPhoto));
    // if (createdPhoto) {
    //     history.push("/photos");
    //     reset();
    // }
    await dispatch(imageActions.createImage(newPhoto)).then(() => history.push("/photos"));
    // reset();
    };

//   const reset = () => {
//     setUserId(1);
//     setImageUrl('');
//     setDescription('');
//   };

//   useEffect(() => {
//     dispatch(getAllImages());
// }, [handleSubmit, dispatch]);

  return (
    <div className="upload-page">
    <div className='upload-container'>
      <form onSubmit={handleSubmit}>
      <div className="flimmr-signup-logo"><img src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1641936934/Flimmr/Flimmr-icon_krefkq.png"}/></div>
        <h1>Upload Photo</h1>
        {/* <input
          type='number'
          onChange={(e) => setUserId(parseInt(e.target.value, 10))}
          value={userId}
          placeholder='userId'
          name='userId'
        /> */}

        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name='description'
          placeholder='Add a description'
          rows='3'
        ></textarea>
        <button id="upload-submit-button" type='submit'>Submit</button>
        <p className="login-signup-link">Not Ready?
      <NavLink id="login-signup-link-link"to="/photos"> Back to Photostream.</NavLink></p>
      </form>
    </div>
    </div>
  );
};
export default PhotoInputForm
;
