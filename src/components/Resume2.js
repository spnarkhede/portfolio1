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
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Masters in Automotive Software Engineering
                        </h5>
                        <p className="resume-card__name">
                            Technical University of Chemnitz, Germany (Oct 2018 - May 2022)
                        </p>
                        <p className="resume-card__details">
                            <strong>Major Courses:</strong> Software Service Engineering, Artificial Intelligence, Empirical Software Engineering, Machine Learning, Software Platforms for Automotive Systems, Multi-core Programming, Computer Vision, H/S Co-design - I, Formal Specification and Verification. <br/>
                            <strong>Lab Courses:</strong> Electronic Controller Unit(ECU) Programming and Communication, JAVA programming, Machine Learning Programming, REST.
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            B.Tech in Computer Science & Engineering
                        </h5>
                        <p className="resume-card__name">
                        Rashtrasant Tukadoji Maharaj Nagpur University, India (July 2014 - May 2018)
                        </p>
                        <p className="resume-card__details">
                            <strong>Major Courses:</strong> Artificial Intelligence, Computer Organization and Architecture, Digital Circuits and Fundamental Microprocessors, Design Analysis and Algorithm, TCP/IP, Mobile Computing. <br/>
                            <strong>Lab Courses:</strong> Data Warehousing & Mining, Distributed Operating Systems, Information & Cyber Security, Design Patterns, Computer Network, Object-Oriented Programming(OOPs).
                        </p>
                    </div>
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Work-Student as Full-Stack Software Engineer
                        </h5>
                        <p className="resume-card__name">
                            Bosch Rexroth AG, 89081 Ulm, Germany (Mar 2021 - Mar 2022)
                        </p>
                        {/* <p className="resume-card__details"> 
                                 1. Created Video Streaming Platform(VSP), Chatbot, Global Chat for Sales & Distribution, After Sales Service and Mobile Hydraulics Departments. This tool is developed in Angular11, NodeJS, TypeScript, LAMP Stack Server, PHP, MySQL, BootStrap and SCSS. 
                            <br/>2. Designed Virtual Conference Platform for sales & service department which launched for different events and assessed by nearly six hundred people external and internally. 
                            <br/>3. Worked on Smart Project Management(SPM) with new additional features such as Content Management, Prototype Delivery, Stock Management, Global Material Planning, Testing, Deployment of SPM Version 2.0.0 and Version 3.0.0 in global level.
                            <br/>4. Implemented Global Authentication, Firewall, Single-Sign-On, One Time Password(OTP), access roles with different user dashboard, established the direct link between Sales unit, Solution partners. 
                            <br/>5. Audited security, customer data, testing of functionality, trainings and technical support to engineers worldwide. 
                        </p> */}
                        <p className="resume-card__details"> 
                                 1. Modernized the architecture of Smart Project Management (SPM) with arc42, semantic data models of MySQL database, integrated new features like content management, quality response, Single-Sign On (SSO) security. Mapped expansion options like prototype delivery, stock availability, software testing scalability, system configurator. Generated three versions and released globally. 
                            <br/>2. Developed Conference Platform (VSP), chatbot, global chat for different departments of Mobile Hydraulics (MH). Managed to develop with Angular 10+, TypeScript, JavaScript Framework, CSS/SCSS/SASS, Bootstrap, NodeJS, LAMP stack and MySQL database.
                            <br/>3. Conducted trainings, supports for technical performance and scalability of software products. Accomplished the overall project independently with the help of agile process model, by using DevOps CI/CD strategies.
                            <br/>4. Achieved strong customer relationships and upsold orders to boost revenue, transperency and tip value. 
                            <br/>5. Audited security, customer data, testing of functionality, trainings and technical support to engineers worldwide. 
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern as Software Developer
                        </h5>
                        <p className="resume-card__name">
                            Bosch Rexroth AG, 89081 Ulm, Germany (Sep 2020 - Mar 2021)
                        </p>
                        {/* <p className="resume-card__details"> 
                                 1. Develop prototype of Smart Project Management(SPM), by analyzing market requirements, marketing designs, tools and technologies, verification of features and functionalities.
                            <br/>2. The tool is developed to establish direct link in between sales and end customer, which will help engineers to support quickly with available data. Decided to develope in Angular 9, Typescript, NodeJS, PHP, MySQL by using LAMP Stack Server. 
                            <br/>3. Launched SPM  Beta Version 1.0.0 on 11th December 2020 for testing, in Global Partner Conference. Analyzed feedbacks and requirements of users and modified the applications with new features.
                            <br/>4. During my internship period, I was personally guided by Director Mr. Edgar Koepplin[DC-MH/SDI] and supervisor Mr. Jakob Tempel[DC-MH/SDI].
                        </p> */}
                        <p className="resume-card__details"> 
                                 1. Coordinated with project manager to architect a Smart Project Management (SPM) web application, boosting transparency throughout business. Built external tool using the NodeJS, Angular 10+, TypeScript and DevOps to automate traditional process into digital one.
                            <br/>2. Improved efficiency by 18% by testing and fixing software bugs, documenting processes, generating RESTful APIs to serve data to the ReactJS front-end, handling over 300,000 concurrent project data. 
                            <br/>3. Iterated platform as a direct link in between sales units & solution partners, collaborating in field of software architecture, focused on UI/UX, and followed marketing guidelines.
                            <br/>4. Reviewed feedback, code and conducted testing for few additional features on SPM web app that increase contribution of sales engineers by 12%.
                            <br/>5. During my internship period, I was personally guided by Director Mr. Edgar Koepplin[DC-MH/SDI] and supervisor Mr. Jakob Tempel[DC-MH/SDI].
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern & Student Trainee as Web Design Developer 
                        </h5>
                        <p className="resume-card__name">
                        (Sep 2016 - Feb 2018)
                        </p>
                        <p className="resume-card__details"> 
                                 1. Paarsh Touch Software Solutions, Nagpur, India.[Bachelor Thesis - XHTML, CSS3, Java 8 JSP, Java Development Kit(JDK), APIs and JSON Connectivity.] 
                            <br/>2. IT-Networkz Infosystems Pvt. Ltd. Nagpur, India. [Internship - HTML5, CSS3, JavaScript, Java, Glassfish server, JDBC, and Eclipse IDE.]
                            <br/>3. Paarsh Touch Software Solutions, Nagpur, India.[Internship - Java Development, Servlet Application, JDBC, Tomcat Server, Hosting, Firebase, Database management.]
                        </p>
                    </div>
            </div>
        </motion.div>
    );
};

export default Resume;