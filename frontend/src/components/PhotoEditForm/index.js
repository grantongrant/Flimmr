import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as imageActions from '../../store/images';
import { useHistory } from "react-router-dom";
import "../../../src/index.css"

const PhotoEditForm = ({ singlePhoto }) => {

    console.log(singlePhoto)
    const id = parseInt(singlePhoto.id, 10);
    console.log(id)
    const userId = (parseInt(singlePhoto.userId, 10));
    const [description, setDescription] = useState(singlePhoto.description);
    const [imageUrl, setImageUrl] = useState(singlePhoto.imageUrl);

    const updateDescription = (e) => setDescription(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);

    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const handleDelete = async (e) => {
      e.preventDefault();
      await dispatch(imageActions.deleteImage(singlePhoto))
      .then(alert("Successfully deleted!"))
      .then(() => history.push("/photos"))
    };

    const handleSubmit =  async (e) => {
      e.preventDefault();

      const updatedPhoto = {
        id,
        userId,
        imageUrl,
        description
      };

      // await dispatch(imageActions.updateImage(updatedPhoto)).then(() => history.push('/photos'))
      await dispatch(imageActions.updateImage(updatedPhoto))
      .then(alert("Successfully updated!"))
      .then(() => history.push("/photos"))
      .catch (async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
    };

    return (
      <div className='editBox'>
        <h1>Edit Photo</h1>
        <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <form onSubmit={handleSubmit}>
          <label> Image URL
          <input
            type='text'
            placeholder={imageUrl}
            value={imageUrl}
            onChange={updateImageUrl}
            name='imageUrl'
          />
          </label>
          <label> Description
          <textarea
            value={description}
            onChange={updateDescription}
            name='description'
            placeholder={description}
            rows='3'
          ></textarea>
          </label>
          <button className="edit-submit-button" type='submit'>Submit</button>
          <button className="edit-submit-button" onClick={handleDelete}>Delete</button>
        </form>
      </div>
    );
  };

  export default PhotoEditForm;
