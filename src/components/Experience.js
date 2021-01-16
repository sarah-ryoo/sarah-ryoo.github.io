import React from 'react';
import '../App.css';

const Experience = () => {
    return(
        <div className="Experience">
            <h2 className="Subheading">Experience</h2>
            <div className="Entry">
                    <h2 className="School">TRIUMF</h2>
                    <div className="Degree">Frontend Developer</div>
                    <div className="Degree-content">WordPress | UI Design | Docker<br/>Pioneered a Public Outreach Portal by creating 
                    an interactive and engaging website to showcase the client's work and increase their
                    brand name recognition.</div>
            </div>

            <div className="Entry">
                    <h2 className="School">The ReFrame Group</h2>
                    <div className="Degree">Backend Developer</div>
                    <div className="Degree-content">Amazon RDS | JSON | MySQL <br/>Implemented a responsive form GUI on the client's existing 
                    website to automate the process of generating a life insurance quote.<br/></div>
            </div>

            <div className="Entry">
                    <h2 className="School">We Occupy Earth</h2>
                    <div className="Degree">Backend Developer</div>
                    <div className="Degree-content">App Development | ReactJS | Google API <br/>Developed a real
                    time mobile app for natural disaster preparation and awareness with a safety guidance feature.
                    </div>
            </div>
            
        </div>
        
    );
}

export default Experience;