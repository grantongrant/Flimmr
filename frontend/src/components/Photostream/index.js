import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getAllImages } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import PhotoInputForm from '../PhotoInputForm';
import SinglePhoto from "../SinglePhoto";
import "../../../src/index.css";
import Albums from '../Album/Albums';
import { NavLink } from 'react-router-dom';

const ImageList = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const sessionImages = images.filter((image) => image?.userId === sessionUser.id)

    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div className="photo-page">
            <div className="photo-info-container">
                <div className="avatar-container">
                    <div className="large-avatar"></div>
                </div>
                <div className="info-container">
                    <h1>{sessionUser.name}</h1>
                    <p>{sessionUser.username}</p>
                </div>
            </div>
            <div className="menu-bar">
                <div className="menu-bar-content">
                    <div className="photostream-menu-label border">Photostream</div>
                    <div className="photostream-menu-label noborder"><NavLink to="/albums">Albums</NavLink></div>
                </div>
            </div>
            <div className="new-album-menu"></div>
            <div className="photo-stream-content">
                {sessionImages?.map(({ imageUrl, id, description }) => (
                    <PhotoDetail key={id} id={id} imageUrl={imageUrl} description={description}/>
                ))}
            </div>
        </div>
    )
}

export default ImageList;
