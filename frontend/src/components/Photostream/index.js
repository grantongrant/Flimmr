import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getAllImages, getAllImagesFromUser } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import PhotoInputForm from '../PhotoInputForm';
import SinglePhoto from "../SinglePhoto";
import "../../../src/index.css";
import Albums from '../Album/Albums';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

const ImageList = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const [isLoaded, setIsLoaded] = useState(false);
    // const sessionImages = images.filter((image) => image?.userId === sessionUser.id)

    useEffect( () => {
        dispatch(getAllImagesFromUser(sessionUser.id));
        // setIsLoaded(true)
    }, [dispatch, sessionUser.id]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);
        return () => clearTimeout(timer);
    });

    return (
        <>
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
                    <NavLink to="/albums"><div className="photostream-menu-label noborder">Albums</div></NavLink>
                </div>
            </div>
            <div className="new-album-menu"></div>
            {isLoaded &&
            <>
            <div className="photo-stream-content">
                {images?.map((image) => (
                    <>
                    <PhotoDetail key={image.id} id={image.id} imageUrl={image.imageUrl} description={image.description}/>
                    </>
                ))}
            </div>
            <Footer/>
            </>}
        </div>
        </>
    )
}

export default ImageList;
