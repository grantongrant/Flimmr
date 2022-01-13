import { NavLink } from 'react-router-dom';
import React from 'react';
import "../../../src/index.css"

const PhotoDetail = ({ id, imageUrl, description }) => {
  return (
    <div className="photo-gallery-photo">
      <NavLink className="single-photo" to={`/photos/${id}`}><img src={`${imageUrl}`} alt={description}/></NavLink>
    </div>
  );
};
export default PhotoDetail;
