import "../../index.css";

function Footer() {

    return (
    <>
        <div className="page-footer">
            <li>React</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JSON API</li>
            <li>Git</li>
        </div>
        <div className="page-about-footer">
            <li>GrantRussell + Flimmr. Connecting people to Norway through photography.</li>
            <li><a href="https://github.com/grantongrant" target="_blank" rel="noreferrer"><img id="github-logo" src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1642108288/Flimmr/github-png-icon_gxrxey.png"} alt="github logo"/></a></li>
            <li><a href="https://linkedin.com/in/grant-ellis-russell" target="_blank" rel="noreferrer"><img id="linkedin-logo" src={"https://res.cloudinary.com/ddxtopm0l/image/upload/v1642108435/Flimmr/linkedin-icon-png_c47nla.png"} alt="linkedin logo"/></a></li>
        </div>
    </>
    )
}

export default Footer;