import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import './PhotoInputForm.css';
import { Redirect } from "react-router-dom";
import { getAllImages } from '../../store/images';

import * as imageActions from "../../store/images";

// When only one component cares about the state, use local state, not Redux

//GOALS:
// Add an image to the redux store
// import useDispatch
// import action creator from store to create an image
// dispatch the new article to the Redux store

const PhotoInputForm = () => {
  const [userId, setUserId] = useState(0);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPhoto = {
      userId,
      imageUrl,
      description
    };

    dispatch(imageActions.createImage(newPhoto));
    reset();
    return <Redirect to="/photos" />;
  };

  const reset = () => {
    setUserId(0);
    setImageUrl('');
    setDescription('');
  };

  useEffect(() => {
    dispatch(getAllImages());
}, [handleSubmit, dispatch]);

  return (
    <div className='inputBox'>
      <h1>Upload Photo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          onChange={(e) => setUserId(parseInt(e.target.value, 10))}
          value={userId}
          placeholder='userId'
          name='userId'
        />

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
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default PhotoInputForm
;
