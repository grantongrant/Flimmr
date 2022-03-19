import { NavLink } from 'react-router-dom';
import React from 'react';
import "../../../src/index.css"

const AlbumDetail = ({album}) => {

  return (
    <div className="photostream-container">
      <div className="photostream-item">
        <div className="photostream-image">
            <div>{album.name}</div>
            <NavLink className="single-photo album-photo" to={`/albums/${album.id}`}><img src={`${album.coverImg}`} alt="album-cover"/></NavLink>
        </div>
      </div>
    </div>
  );
};
export default AlbumDetail;
