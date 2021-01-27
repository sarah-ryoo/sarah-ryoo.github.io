import React from 'react';
import '../App.css';
import projectposter from '../projectposter.jpg';

const Experience = () => {
    return(
        <div className="Experience">
            <h2 className="Subheading">Experience</h2>
            <div className="Entry">
                    <h2 className="School">TRIUMF</h2>
                    <div className="Degree">Frontend Developer</div>
                    <div className="Degree-content">WordPress | UI Design | Docker</div>
                    <div className="Experience-description">Pioneered a Public Outreach Portal by creating 
                    an interactive and engaging website to showcase the client's work and increase their
                    brand name recognition.<br/></div>
                    <div className="Degree-content">2020</div>
            </div>

            <div className="Entry">
                    <h2 className="School">The ReFrame Group</h2>
                    <div className="Degree">Backend Developer</div>
                    <div className="Degree-content">Amazon RDS | JSON | MySQL</div> 
                    <div className="Experience-description">Implemented a responsive form GUI on the client's existing 
                    website to automate the process of generating a life insurance quote.</div>
                    <div className="Degree-content">2020</div> 
            </div>

            <div className="Entry">
                    <h2 className="School">We Occupy Earth</h2>
                    <div className="Degree">Backend Developer</div>
                    <div className="Degree-content">App Development | ReactJS | Google API</div> 
                    <div className="Experience-description">Developed a real time mobile app for natural disaster preparation and awareness with a safety guidance feature.</div>
                    <div className="Degree-content"><a href="https://we-occupy-earth.firebaseapp.com/">The App</a>  |  
                    <a href="https://www.youtube.com/watch?v=b3ogAyVLEXQ&ab_channel=KTruong"> Video Walkthrough</a>  |  
                    <a href= { projectposter }> Project Poster</a></div>
                    <div className="Degree-content">2019</div>
            </div>
            
        </div>
        
    );
}

export default Experience;