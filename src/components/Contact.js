import React from 'react';
import '../App.css';

const Contact = () => {
    return(
        <div className="Contact-container">
            <h2 className="Section-header">Contact</h2>
            <div className="CV-download">
                <button class="btn"><i class="fa fa-download"></i> Download CV</button>
            </div>
            <div className="Social-icons">
                <a className="btn btn-social-icon" href="mailto:sarah.h.ryoo@gmail.com"><i class="fa fa-google"></i></a>
                <a className="btn btn-social-icon" href="https://www.linkedin.com/in/sarahryoo/"><i class="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon" href="https://github.com/sarah-ryoo"><i class="fa fa-github"></i></a>
            </div>
        </div>
    );
};

export default Contact;