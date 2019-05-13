import React from 'react';

const SocialIcons = (props) => (
    <React.Fragment>
        <div className="text">
            <h5>Lets socialize:&nbsp;</h5>
        </div>
        <div className="icon-1">
            <img src="./img/facebook.svg" alt="facebook"/>
        </div>
        <div className="icon-2">
            <img src="./img/twitter.svg" alt="twitter"/>
        </div>
        <div className="icon-3">
            <img src="./img/youtube.svg" alt="youtube"/>
        </div>
        <div className="icon-4">
            <img src="./img/linkedin.svg" alt="linkedin"/>
        </div>
    </React.Fragment>
)

const Footer = (props)=>(
    <div className="footer">
        <div className="social">{<SocialIcons />}</div>
        <div className="copyright">&copy; 2019 Some Rights Reserved by #SheDidIt </div>
        <div className="contact"><a href="https://www.shedidit.be/">Contact Us</a></div>
    </div>
);

export default Footer;