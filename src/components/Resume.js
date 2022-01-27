import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'


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
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Masters in Automotive Software Engineering
                        </h5>
                        <p className="resume-card__name">
                            Technical University of Chemnitz, Germany <br/>(2018-2022)
                        </p>
                        <p className="resume-card__details">
                            <strong>Major Courses:</strong>Major Courses: Software Service Engineering, Artificial Intelligence, Emperical Software Engineering, Machine Learning, Software Platforms for Automotive Systems, Multicore Programming, Computer Vision, H/S Codesign - I, Formal Specification and Verification. <br/>
                            <strong>Lab Courses:</strong>Lab Courses: Electronic Controller Unit(ECU) Programming and Communication, JAVA programming, Machine Learning Programming, REST.
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            B.Tech in Computer Science & Engineering
                        </h5>
                        <p className="resume-card__name">
                        Rastrasant Tukadoji Maharaj Nagpur University, India (2014-2018)
                        </p>
                        <p className="resume-card__details">
                            <strong>Major Courses:</strong>Major Courses: Software Service Engineering, Artificial Intelligence, Emperical Software Engineering, Machine Learning, Software Platforms for Automotive Systems, Multicore Programming, Computer Vision, H/S Codesign - I, Formal Specification and Verification. <br/>
                            <strong>Lab Courses:</strong>Lab Courses: Electronic Controller Unit(ECU) Programming and Communication, JAVA programming, Machine Learning Programming, REST.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Work-Student as Full-Stack Software Engineer
                        </h5>
                        <p className="resume-card__name">
                            Bosch Rexroth AG, 89081 Ulm, Germany<br/>(Mar 2021-Mar 2022)
                        </p>
                        <p className="resume-card__details"> 
                                 1. Created Video Streaming Platfrom(VSP), Chatbot, Global Chat for Sales & Distribution, After Sales Service and Mobile Hydraulics Departments. This tool is developed in Angular11, NodeJS, TypeScript, LAMP Stack Server, PHP, MySQL, BootStrap and SCSS. 
                            <br/>2. Designed Virtual Conference Platform for sales & service department which launched for different events and assessed by nearly six hundred people external and internally. 
                            <br/>3. Worked on Smart Project Management(SPM) with new additional features such as Content Management, Prototype Delivery, Stock Management, Global Material Planning, Testing, Deployment of SPM Version 2.0.0 and Version 3.0.0 in global level.
                            <br/>4. Implemented Global Authentication, Firewall, Single-Sign-On, One Time Passowrd(OTP), access roles with different user dashboard, established the direct link between Sales unit, Solution partners. 
                            <br/>5. Audited security, customer data, testing of functionality, trainings and technical support to engineers worldwide. 
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern as Software Developer
                        </h5>
                        <p className="resume-card__name">
                            Bosch Rexroth AG, 89081 Ulm, Germany<br/>(Sep 2020-Mar 2021)
                        </p>
                        <p className="resume-card__details"> 
                                 1. Develop prototype of Smart Project Management(SPM), by analyzing market requirements, marketing designs, tools and technologies, verification of features and functionalities.
                            <br/>2. The tool is developed to establish direct link in between sales and end customer, which will help engineers to support quickly with available data. Decided to develope in Angular 9, Typescript, NodeJS, PHP, MySQL by using LAMP Stack Server. 
                            <br/>3. Launched SPM  Beta Version 1.0.0 on 11th December 2020 for testing, in Global Partner Conference. Analyzed feedbacks and requirements of users and modified the applications with new features.
                            <br/>4. During my internship period, I was personally guided by Director Mr. Edgar Koepplin[DC-MH/SDI] and supervisor Mr. Jakob Tempel[DC-MH/SDI].
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern & Student Trainee as Web Design Developer
                        </h5>
                        {/* <p className="resume-card__name">
                            Bosch Rexroth AG, 89081 Ulm, Germany<br/>(Mar 2021-Mar 2022)
                        </p> */}
                        <p className="resume-card__details"> 
                                 1. Paarsh Touch Software Solutions, Nagpur, India.[Bachelor Thesis - XHTML, CSS3, Java 8 JSP, Java Development Kit(JDK), APIs and JSON Connectivity.] 
                            <br/>2. IT-Networkz Infosystems Pvt. Ltd. Nagpur, India. [Internship - HTML5, CSS3, JavaScript, Java, Glassfish server, JDBC, and Eclipse IDE.]
                            <br/>3. Paarsh Touch Software Solutions, Nagpur, India.[Internship - Java Development, Servlet Application, JDBC, Tomcat Server, Hosting, Firebase, Database management.]
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;