import React from 'react';
import { NavLink } from 'react-router-dom';
import InspirationContent from './InspirationContent';
import '../../../src/index.css'

const SplashPage = () => {

    return (
        <div className = "splash-content">
            <div className ="splash-slideshow">
                <div className="splash-inspiration">
                    <InspirationContent />
                    <div className="splash-attribution">
                    </div>
                </div>
                <div className="splash-footer">
                </div>
            </div>
        </div>
    )
}

export default SplashPage;
