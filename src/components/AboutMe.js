import React from 'react';
import '../App.css';
import profile from '../profile.jpg';

const AboutMe = () => {
    return (
        <div className="Aboutme">
            <img src={ profile } alt="Profile"/>
            <p>I'm a chemist turned programmer with a particular interest for data science. 
            Coding was a steep learning curve for me and everday is a new challenge,
            but I believe those challenges have made me a better programmer today than I was yesterday.<br/>
            <br/>I'm working towards my goal of using my passion and backgrounds to tackle environmental and 
            social issues.</p>
        </div>
    );
};

export default AboutMe;