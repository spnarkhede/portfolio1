import React from 'react';
import { motion } from 'framer-motion'

const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume" variants={resume_variants} initial="hidden" animate="visible" exit="exit" >
            <div className="row">
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Certifications
                        </h5>
                        <p className="resume-card__name">
                        </p>
                        <p className="resume-card__details">
                        1. AWS Fundamentals Specialisation (Coursera). <br/>
                        2. Getting Started with AWS Machine Learning (Coursera).<br/>
                        3. Introduction to Self-Driving Cars-University of Toronto (Coursera)<br/>
                        4. Introduction to Data Science (IBM)<br/>
                        5. Python 101 for Data Science (IBM)<br/>
                        6. Angular: The Big Picture (Pluralsight)<br/>
                        7. The Advanced ReactJS Course (Pluralsight)<br/>
                        8. The Google Cloud Challenge 2021 - GDG Cloud India (Google)<br/>
                        <a href='https://www.linkedin.com/in/spnarkhede/details/certifications/' target="_blank" rel="noopener noreferrer" className='certification'>(See More)</a>
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Participations
                        </h5>
                        <p className="resume-card__name">
                        </p>
                        <p className="resume-card__details">
                            1. Volunteer of Hochschule SMD Chemnitz and Ulm.  <br/>
                            2. Contribute with UNICEF University Group of Chemnitz.<br/>
                            3. Offered social services with Rotary Club(social services organization in Nagpur), India.
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Spoken Languages
                        </h5>
                        <p className="resume-card__name">
                        </p>
                        <p className="resume-card__details">
                            <strong>1. English</strong> - Fluent (C1) &nbsp; 
                            <strong>2. German</strong> - Basic (A2)  &nbsp;
                            <strong>3. Hindi</strong> - Native Language  &nbsp;
                            <strong>4. Marathi</strong> - Mother Tongue 
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Hobbies & Interests
                        </h5>
                        <p className="resume-card__name">
                        </p>
                        <p className="resume-card__details">
                            Content Creation, Photography, Reading, Pencil Sketching, Singing, Cooking, Electronic Trends, Gaming and Travelling. 
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Sports
                        </h5>
                        <p className="resume-card__name">
                        </p>
                        <p className="resume-card__details">
                            Badminton, Table Tennis, Cricket  
                        </p>
                    </div>
            </div>
        </motion.div>
    );
};

export default Resume;