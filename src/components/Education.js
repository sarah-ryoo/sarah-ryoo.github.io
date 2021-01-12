import React from 'react';

const Education = () => {
    return (
        // <div className="Education-container">
        //     <h2 className="Section-header">Education</h2>
        //     <div className="BCIT">
        //         <h3>British Columbia Institute of Technology</h3>
        //         <div className="subheading mb-3">Computer Systems Technology Diploma</div>
        //             <div>Graduated with Distinction</div>
        //             <div>Predictive Analytics Option - Predictive Modelling, Machine Learning, Big Data Analytics</div>
        //     </div>
        //     <div className="flex-shrink-0"><span className="text-primary">January 2019 - December 2020</span></div>

        //     <div className="Uvic">
        //         <h3>University of Victoria</h3>
        //         <h4>Bachelor of Science in Chemistry</h4>
        //     </div>
        // </div>

        <div className="Education-container">
            <h2 className="Section-header">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h2 class="mb-0">British Columbia Institute of Technology</h2>
                    <div class="subheading mb-3">Computer Systems Technology Diploma</div>
                    <div>Graduated with Distinction</div>
                    <div>Predictive Analytics Option - Predictive Modelling, Machine Learning, Big Data Analysis</div>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">January 2019 - December 2020</span></div>
            </div>

            <div className="Test">
                    <h2 className="School">British Columbia Institute of Technology</h2>
                    <div className="Degree">Computer Systems Technology Diploma</div>
                    <div>Graduated with Distinction</div>
                    <div>Predictive Analytics Option - Predictive Modelling, Machine Learning, Big Data Analysis</div>
                    <div class="flex-shrink-0">2019 - 2020</div>
            </div>

            <div class="Test">
                <div class="flex-grow-1">
                    <h2 class="mb-0">University of Victoria</h2>
                    <div class="subheading mb-3">Bachelor of Science in Chemistry</div>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">2010 - 2015</span></div>
            </div>
        </div>
    )
    
}

export default Education;