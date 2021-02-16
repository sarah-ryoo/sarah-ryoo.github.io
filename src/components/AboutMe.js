import React from 'react';
import '../App.css';
import profile from '../profile.jpg';

const AboutMe = () => {
    return (
        <div className="Aboutme">
            <div className="ColumnImg">
                <img src={ profile } alt="Profile"/>
            </div>
            <div className="ColumnText">
                <p>I'm a chemist turned programmer with a particular interest for data science. 
                Coding was a steep learning curve for me and everday is a new challenge,
                but I believe those challenges have made me a better programmer today than I was yesterday.<br/><br/>
                When I'm not in front of a screen I enjoy carpentry, gardening, and learning new languages :)</p>
            </div>
        </div>
    );
};

export default AboutMe;