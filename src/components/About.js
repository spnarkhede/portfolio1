import React from 'react';
import api from '../assets/icons/api.svg'
// import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';
import { motion } from 'framer-motion'
const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using and SQLlite",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using django-rest-api "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]


const About = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
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
        <motion.div className="about"

            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
            <p>High-performing IT professional with passion for managing and leading cross-functional, agile international teams. My area
            of expertise lies in planning and executing entire process of IT projects with a robust awareness of agile methodologies which
            include SCRUM. Skilled in requirement engineering, UX design thinking, defining user stories, and meeting business desires
            inside SAP ecosystems. With a strong foundation in software architecture and development, web technologies, and database
            systems, I excel in agile software development. Additionally, I have a talent for developing trainings and rollout strategies,
            ensuring effective project coordination, and presenting project updates in steering committees.</p> 
            
            Key Skills: Quality Assurance, Analytical Thinker, Internal Auditing Experience, Relationship Management, Faultless Attention to Details, Advanced Communication Skills. 
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;