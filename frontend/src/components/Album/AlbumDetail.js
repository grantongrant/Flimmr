import { NavLink } from 'react-router-dom';
import React from 'react';
import "../../../src/index.css"
import { useDispatch } from 'react-redux';
import { deleteAnAlbum } from '../../store/albums';

const AlbumDetail = ({album}) => {

    const dispatch = useDispatch();


  const deleteThisAlbum = async (albumId) => {
      await dispatch (deleteAnAlbum(albumId))
  }

  return (
    <div className="photostream-container">
      <div className="photostream-item">
        <div className="photostream-image">
            <div>{album.name}</div>
            <button type="button" onClick={(e) => deleteThisAlbum(album.id)}>Delete</button>
            <NavLink className="single-photo album-photo" to={`/albums/${album.id}`}><img src={`${album.coverImg}`} alt="album-cover"/></NavLink>
        </div>
      </div>
    </div>
  );
};
export default AlbumDetail;
