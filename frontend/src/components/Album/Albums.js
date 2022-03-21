import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getAllImages } from '../../store/images';
import PhotoDetail from '../PhotoDetail';
import PhotoInputForm from '../PhotoInputForm';
import SinglePhoto from "../SinglePhoto";
import "../../../src/index.css";
import {getAllAlbums} from "../../store/albums";
import AlbumDetail from './AlbumDetail';
import {MdOutlineLibraryAdd} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { deleteAnAlbum } from '../../store/albums';
import {BiTrash} from 'react-icons/bi';


function Albums() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const sessionImages = images.filter((image) => image?.userId === sessionUser.id)
    const albumsObject = useSelector((state) => state.album)
    const albums = Object.values(albumsObject);
    const [albumDelete, setAlbumDelete] = useState(false);

    useEffect(() => {
        dispatch(getAllAlbums(sessionUser.id));
      }, [dispatch]);

    const deleteThisAlbum = async (albumId) => {
        await dispatch (deleteAnAlbum(albumId))
        await dispatch(getAllAlbums(sessionUser.id));
    }

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
            <NavLink to="/photos"><div className="photostream-menu-label noborder">Photostream</div></NavLink>
            <div className="photostream-menu-label border">Albums</div>
        </div> 
    </div>
    <div className="new-album-menu">
        {/* <div className="new-album-content">
            <div className="add-album-menu"><MdOutlineLibraryAdd/></div>
            <div className="add-album-text">New album</div>
        </div> */}
    </div>
    {albums?.length !== 0 ?
    <div className="album-content">
        {albums?.map((album) => (
            <div className="photostream-container">
            <div className="photostream-item" onMouseEnter={(e) => setAlbumDelete(true)} onMouseLeave={(e) => setAlbumDelete(false)}>
              <div className="photostream-image">
                  <NavLink className="single-photo album-photo" to={`/albums/${album.id}`}><img src={`${album.coverImg}`} alt="album-cover"/></NavLink>
              </div>
              <div className="photo-stream-album-info">
                <div className="album-title-count">
                    <div>{album.name}</div>
                    {album.imageCount === 1 ? 
                    <div id="album-image-count">{album.imageCount} photo</div> :
                    <div id="album-image-count">{album.imageCount} photos</div>}
                </div>
                {albumDelete ?
                <div><button className="album-delete-button" type="button" onClick={(e) => deleteThisAlbum(album.id)}><BiTrash/></button></div> : null }
              </div>
            </div>
          </div>
        ))}
    </div> :
    <div className="empty-album">
        <div id="make-an-album">Let's make an album.</div>
        <div id="easily-organize">Easily organize all your photos into beautiful albums to share with friends, family, or even other Flimmr members.</div>
        <button id="go-to-photostream"><NavLink to="/photos">Go to Photostream</NavLink></button>
    </div> }
    </div>
  )
}

export default Albums;
