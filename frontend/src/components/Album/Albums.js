import React, { useEffect } from 'react';
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

function Albums() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const sessionImages = images.filter((image) => image?.userId === sessionUser.id)
    const albumsObject = useSelector((state) => state.album)
    const albums = Object.values(albumsObject);

    useEffect(() => {
        dispatch(getAllAlbums(sessionUser.id));
      }, [dispatch]);

  return (
    <>
    <div className="new-album-menu">
        <div className="new-album-content">
            <div className="add-album-menu"><MdOutlineLibraryAdd/></div>
            <div className="add-album-text">New album</div>
        </div>
    </div>
    <div className="album-content">
        {albums?.map((album) => (
            <AlbumDetail album={album}/>
        ))}
    </div>
    </>
  )
}

export default Albums;