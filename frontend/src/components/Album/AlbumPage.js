import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImagesInAlbum } from '../../store/images';
import "../../../src/index.css";
import { NavLink, useParams } from 'react-router-dom';
import {BsArrowLeftShort} from 'react-icons/bs';
import { getTheAlbum, updateAnAlbum } from '../../store/albums';
import PhotoDetail from '../PhotoDetail';
import {RiEditBoxLine} from 'react-icons/ri';


function AlbumPage() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);
    const album = useSelector(state => state.album)
    const albumId = album.id;
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(album.name);
    const [description, setDescription] = useState(album.description);
    const [updateAlbum, setUpdateAlbum] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getImagesInAlbum(id));
        dispatch(getTheAlbum(id))
        // setIsLoaded(true)
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);
        return () => clearTimeout(timer);
    });


    const sectionStyle = {
        backgroundImage: "url(" + images[0]?.imageUrl + ")"
    };

    const updateThisAlbum = async (e) => {
    
        const updatedAlbum = {
            albumId,
            name,
            description,
        }
        
        await dispatch(updateAnAlbum(updatedAlbum))
        await dispatch(getTheAlbum(id))
      };

    const EditAlbumDetails = (
        <form className="album-title-description-form">
                <input required
                    type="text"
                    defaultValue={album.name}
                    onChange={(e) => setName(e.target.value)}
                    className="album-title"
                />
                <input
                    type="text"
                    defaultValue={album.description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="album-description"
                />  
            <button onClick={(e) => {
                setUpdateAlbum(false)
                setEdit(false)
                updateThisAlbum()
                }}>Done</button>
        </form>
    )

  return (
    <>
    <div className="album-page-container">
        <div id="navbar-background"></div>
        <div className="album-page-content">
            <NavLink to="/albums"><div className="album-page-menu">
                <div className="album-left-arrow"><BsArrowLeftShort/></div>
                <div>Back to albums</div>
            </div></NavLink>
            <div className="album-page-background-photo" style={ sectionStyle }>
                {updateAlbum && isLoaded ? EditAlbumDetails :
                <div className="album-title-description" onClick={(e) => {
                    setUpdateAlbum(true)
                    setName(album.name)
                    setDescription(album.description)}} onMouseEnter={(e) => setEdit(true)} onMouseLeave={(e) => setEdit (false)}>
                    {edit ?
                    <div className="edit-button-hover"><RiEditBoxLine/></div> :
                    null}
                    <div className="album-title">{album.name}</div>
                    <div className="album-description">{album.description ? album.description : "Click here to enter a description for this album"}</div>
                    {images.length === 1 ? 
                    <div className="number-of-photos">{images.length} photo</div> :
                    <div className="number-of-photos">{images.length} photos</div>}
                </div> }
                <div className="by-user"><NavLink to="/photos">By: {sessionUser.name}</NavLink></div>
            </div>
            <div className="album-stream-content">
                {isLoaded && images?.map(({ imageUrl, id, description }) => (
                    <PhotoDetail key={id} id={id} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default AlbumPage;