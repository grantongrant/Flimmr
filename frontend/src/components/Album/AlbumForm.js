// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { createAlbum, getAllAlbums } from "../../store/albums";
import { BiPlus } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {CgAlbum} from 'react-icons/cg';

function AlbumForm({setShowModal, singlePhoto}) {
    
  const sessionUser = useSelector(state => state.session.user);
  const albumsObject = useSelector((state) => state.album)
  const albums = Object.values(albumsObject);
  console.log(albums) 
  console.log(singlePhoto)
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [createAlbumToggle, setCreateAlbumToggle] = useState(false);

  useEffect(() => {
    dispatch(getAllAlbums(userId));
  }, [dispatch]);

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

  const divStyle = {
    backgroundImage: "url(" + singlePhoto.imageUrl + ")",
    height: "52px",
    width: "52px"
  }

  let modalContent;

  if (!createAlbumToggle) {
      modalContent = 
      <>
      <div className="add-to-album-container">
        <div className="add-to">Add to:</div>
        <div className="album-header">Albums</div>
      </div>
      <div className="album-search-header"></div>
      <div className="album-list">
        {albums? albums.map((album) => (
          <div className="album-list-container">
            <div className="album-list-cover-image"><CgAlbum/></div>
            <div className="album-list-name">{album.name}</div>
            <div className="album-list-check"><BsFillCheckCircleFill/></div>
          </div>
        )) :
        <div id="no-albums">No albums</div>}
      </div>
      <div className="album-footer">
        <button type="button" onClick={(e) => setCreateAlbumToggle(true)}>
          <div id="album-plus"><BiPlus/></div>
          <div id="create-new-album">Create new album</div>
        </button>
        <button type="button" id="new-album-done" onClick={(e) => setShowModal(false)}>Done</button>
      </div>
      </>
  } else {
      modalContent = 
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
        <button type="button" onClick={(e) => setCreateAlbumToggle(false)}>Cancel</button>
        <button type="submit">Create</button>
    </form>
  }



  return (
    <div className="album-modal-container">
        {modalContent}
    {/* <form onSubmit={handleSubmit}>
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
    </form> */}
    </div>
  );
}

export default AlbumForm;