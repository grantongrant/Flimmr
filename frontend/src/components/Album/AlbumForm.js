// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { createAlbum } from "../../store/albums";

function AlbumForm() {
    
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newAlbum = {
        userId,
        name,
        description
    }

    await dispatch(createAlbum(newAlbum))
  };

  return (
    <div className="album-modal-container">
    <form onSubmit={handleSubmit}>
        <div>Create a new album</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Album name"
        />
        <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
        </ul>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          id="description-optional"
        />
        <button type="button">Cancel</button>
        <button type="submit">Create</button>
    </form>
    </div>
  );
}

export default AlbumForm;