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
                            Master Thesis: Development of an Automotive System Selector of Mobile Machinery for Bosch Rexroth Sales Partner based on Azure Cloud Technology.
                        </h5>
                        <p className="resume-card__name">
                            Bosch Rexroth AG, 89081 Ulm, Germany
                        </p>
                        <p className="resume-card__details"> 
                                 1. Developed a Centralized Business Application which helps engineers with Customer Relationship management(CRM), IT Service Management, Management Information System(MIS), Content Management(CM) with the help of Mobile Backend as a Service(MBaaS).
                            <br/>2. Technologies used ReactJS, MongoDB, PowerBI Analytics, DevOps, RESTful APIs, Pipeline, NodeJS, CI/CD and AZURE Cloud hosting and deployment services. 
                            <br/>3. This tool will automate the manual process into computerized by studying large sets of project records and assist engineers to generate complete machine with materials suggestions. This tool will increase the efficiency, reduced timestamp of processes, and bring profit in Sales division of Bosch Rexroth AG. 
                        </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Bachelor Thesis: Personalization of Search Engine by Using Server-Side Cache Based Approach
                        </h5>
                        <p className="resume-card__name">
                            Rastrasant Tukadoji Maharaj Nagpur University, India
                        </p>
                        <p className="resume-card__details"> 
                                 1. Developed a web search engine indexer for ranking the results retrieved from WWW. URL ranking proposed for personalized user-based results using the concept of cloud cache.
                            <br/>2. Created front end by using XHTML, CSS3, Java JSP., JDK for Java development. Web services and APIs use JSON format to provide public data.
                            <br/>3. This search-engine application is provided recommendation results on the basis of your previous search results and mostly search area, so user will get quick results. 
                        </p>
                    </div>
            </div>
        </motion.div>
    );
};

export default Resume;