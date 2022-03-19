import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesInAlbum } from '../../store/images';
import "../../../src/index.css";
import { NavLink, useParams } from 'react-router-dom';
import {BsArrowLeftShort} from 'react-icons/bs';
import { getTheAlbum } from '../../store/albums';


function AlbumPage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const album = useSelector(state => state.album)
    console.log(album)
    console.log(images[0].imageUrl)
    // const albumsObject = useSelector((state) => state.album)
    // const albums = Object.values(albumsObject);

    useEffect(() => {
        dispatch(getImagesInAlbum(id));
        dispatch(getTheAlbum(id))
      }, [dispatch]);

    const sectionStyle = {
        backgroundImage: "url(" + images[0].imageUrl + ")",
    };

  return (
    <div className="album-page-container">
        <div className="album-page-content">
            <NavLink to="/photos"><div className="album-page-menu">
                <div className="album-left-arrow"><BsArrowLeftShort/></div>
                <div>Back to photostream</div>
            </div></NavLink>
            <div className="album-page-background-photo" style={ sectionStyle }>
                <div className="album-title-description">
                    <div className="album-title">{album.name}</div>
                    <div className="album-description">{album.description}</div>
                </div>
                <div className="number-of-photos">{images.length} photos</div>
                <div className="by-user">By: {sessionUser.name}</div>
            </div>
            <div className="album-page-photo-gallery"></div>
        </div>
    </div>
  )
}

export default AlbumPage;