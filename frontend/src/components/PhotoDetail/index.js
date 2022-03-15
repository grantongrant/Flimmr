import { NavLink } from 'react-router-dom';
import React from 'react';
import "../../../src/index.css"

const PhotoDetail = ({ id, imageUrl, description }) => {
  return (
    <div className="photostream-container">
      <div className="photostream-item">
        <div className="photostream-image">
          <NavLink className="single-photo" to={`/photos/${id}`}><img src={`${imageUrl}`} alt={description}/></NavLink>
        </div>
      </div>
    </div>
  );
};
export default PhotoDetail;
