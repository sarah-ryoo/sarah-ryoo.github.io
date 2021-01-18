import React from 'react';
import '../App.css';
import cv from '../SarahRyoo_Resume.pdf';

const Contact = () => {
    return(
        <div className="Contact">
            <h2 className="Subheading">Contact</h2>
            <div className="CV-download">
                <a href={ cv }><button class="btn"><i class="fa fa-download"></i> Download CV</button></a>
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