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
                    <div className="Experience-description">Spearheaded a Public Outreach Portal for TRIUMF by creating 
                    an interactive and engaging website to showcase their work and increase brand name recognition. <br/></div>
                    <div className="Degree-content">2020</div>
            </div>

            <div className="Entry">
                    <h2 className="School">The ReFrame Group</h2>
                    <div className="Degree">Backend Developer</div>
                    <div className="Degree-content">Amazon RDS | JSON | MySQL</div> 
                    <div className="Experience-description">Developed and implemented a responsive form GUI on the client’s existing 
                    website to obtain the customer’s information required to generate a life insurance quote.</div>
                    <div className="Degree-content">2020</div> 
            </div>

            <div className="Entry">
                    <h2 className="School">We Occupy Earth</h2>
                    <div className="Degree">Backend Developer</div>
                    <div className="Degree-content">App Development | ReactJS | Google API</div> 
                    <div className="Experience-description">A real time mobile application for natural disaster preparation and 
                    awareness with a safety guidance feature implemented using Google Maps API.<br/><br/>Project was chosen to present at the 
                    EcoCity World Summit 2019 in Vancouver.</div>
                    <div className="Degree-content"><a href="https://we-occupy-earth.firebaseapp.com/">The App</a>  |  
                    <a href="https://www.youtube.com/watch?v=b3ogAyVLEXQ&ab_channel=KTruong"> Video Walkthrough</a>  |  
                    <a href= { projectposter }> Project Poster</a></div>
                    <div className="Degree-content">2019</div>
            </div>
            
        </div>
        
    );
}

export default Experience;