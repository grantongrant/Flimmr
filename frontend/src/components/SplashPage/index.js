import React from 'react';
import { NavLink } from 'react-router-dom';
import './SplashPage.css';
import SplashPageHeader from '../SplashPageHeader';

const SplashPage = () => {

    const imgUrl = "https://res.cloudinary.com/ddxtopm0l/image/upload/v1641762893/Flimmr/john-o-nolan-6f_ANCcbj3o-unsplash_aqeewk.jpg"


    return (
        <div
        className="splash-page"
        >
            <SplashPageHeader />
            <h1>Find your inspiration.</h1>
            <h2>Join the Flimmr community, home to tens of billions of photos and 2 million groups.</h2>
            <button>Start for free</button>
        </div>
    )

}

export default SplashPage
