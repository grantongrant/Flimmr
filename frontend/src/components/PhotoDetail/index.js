import { NavLink } from 'react-router-dom';
import React from 'react';

const PhotoDetail = ({ id, imageUrl, description }) => {
  return (
    <div>
      <NavLink to={`/photos/${id}`}><img src={`${imageUrl}`} alt={description}/></NavLink>
    </div>
  );
};
export default PhotoDetail;
