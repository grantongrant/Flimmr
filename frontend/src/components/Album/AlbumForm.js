// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { createAlbum, getAllAlbums, getTheAlbum } from "../../store/albums";
import { BiPlus } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {CgAlbum} from 'react-icons/cg';
import { getTheImage, updateImageAlbum } from "../../store/images";
import {IoMdClose} from 'react-icons/io';

function AlbumForm({setShowModal, singlePhoto}) {
    
  const sessionUser = useSelector(state => state.session.user);
  const albumsObject = useSelector((state) => state.album)
  const albums = Object.values(albumsObject);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [createAlbumToggle, setCreateAlbumToggle] = useState(false);
  const [check, setCheck] = useState(false);
  const [idOfAlbum, setIdOfAlbum] = useState(singlePhoto.albumId ? singlePhoto.albumId : 0);
  const singlePhotoId = singlePhoto.id;
  const coverImg = singlePhoto.imageUrl;

  useEffect(() => {
    dispatch(getAllAlbums(userId));
  }, [dispatch]);

  const addImageToAlbum =  async (e) => {

    if (idOfAlbum === singlePhoto.albumId) {
      await dispatch(getTheImage(singlePhotoId))
      await dispatch(getTheAlbum(idOfAlbum))
    } else {
    const updatedPhoto = {
      singlePhotoId,
      idOfAlbum
    };

    await dispatch(updateImageAlbum(updatedPhoto))
    // await dispatch(getAllAlbums(userId))
    await dispatch(getTheImage(singlePhotoId))
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newAlbum = {
        userId,
        name,
        coverImg,
        description
    }
    
    await dispatch(createAlbum(newAlbum));
    await dispatch(getAllAlbums(userId));
    setName("")
    setDescription("")
    setCreateAlbumToggle(false)
    
  };

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
            <div className="album-list-name" onClick={(e) => {
              setCheck(true)
              setIdOfAlbum(album.id)
              }}>{album.name}</div>
            {check && album.id === idOfAlbum ? 
            <div className="album-list-check"><BsFillCheckCircleFill/></div> :
            <div className="album-list-check"></div> }
          </div>
        )) :
        <div id="no-albums">No albums</div>}
      </div>
      <div className="album-footer">
        <button type="button" onClick={(e) => setCreateAlbumToggle(true)}>
          <div id="album-plus"><BiPlus/></div>
          <div id="create-new-album">Create new album</div>
        </button>
        <button type="button" id="new-album-done" onClick={(e) => {
          setShowModal(false)
          addImageToAlbum(idOfAlbum)}}>Done</button>
      </div>
      </>
  } else {
      modalContent = 
      <form className="create-album-form" onSubmit={handleSubmit}>
        <div className="create-a-new-album">
          <div>Create a new album</div>
          <div className="close-create-album" onClick={(e) => setShowModal(false)}><IoMdClose/></div>
          </div>
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
        <textarea
          // type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          id="description-optional"
        />
        <div className="create-album-buttons">
          <button className="create-album-cancel" type="button" onClick={(e) => setCreateAlbumToggle(false)}>Cancel</button>
          <button className="create-album-create" type="submit">Create</button>
        </div>
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