import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';

import { getAllImages } from '../../store/images';
import './ProfilePage.css'

const ImageList = () => {
    const dispatch = useDispatch();

    const imagesObject = useSelector((state) => state.image)
    const images = Object.values(imagesObject);


    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div className="images-container">
           <main>
               {images?.map((image) => {
                    return <li>
                            <img src={`${image.imageUrl}`}/>
                            </li>
               })}
           </main>
        </div>
    )
}

export default ImageList;
