import React from 'react';
import '../App.css';
import profile from '../tina.png';

const AboutMe = () => {
    return (
        <div className="Aboutme-container">
            <h2 className="Section-header">About Me</h2>
            
            <p><img src={profile} alt="Profile" />Welcome to my portfolio.<br/>I'm a chemist turned web developer with a passion for ... <br/>
            I have a particular interest for data science.<br/>
            I'm always curious and always learning.</p>
        </div>
    );
};

export default AboutMe;