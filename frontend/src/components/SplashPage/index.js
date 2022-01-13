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
                    {/* <ul className="footer-technologies"> */}
                        <li>React</li>
                        <li>Redux</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>PostgresSQL</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JSON API</li>
                        <li>Git</li>
                    {/* </ul> */}
                </div>
                <div className="about-footer">
                        <li>GrantRussell+flimmer. Connecting people to Norway through photography.</li>
                        <li><a href="https://github.com/grantongrant">Github</a></li>
                        <li><a href="www.linkedin.com/in/grant-russell-625bbb228">LinkedIn</a></li>

                </div>
                    {/* <ul className="grant-info">
                        <li>GrantRussell+flimmr. Connecting people through photography.</li>
                    </ul> */}
            </div>
        </div>
    )
}

export default SplashPage;
