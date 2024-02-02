import React, { useState } from "react";
import facebook from "../assets/icon-green/facebook.svg";
import instagram from "../assets/icon-green/instagram.svg";
import linkedIn from "../assets/icon-green/linkedin2.svg";
import twitter from "../assets/icon-green/twitter.svg";
import github from "../assets/icons/github.svg";
import Stack from "../assets/icon-green/stack-overflow.svg";
import Medium from "../assets/icon-green/medium-4.svg";
// import Teams from "../assets/icon-green/microsoftteams.svg";
import Phone from "../assets/icon-green/phone.svg";
// import Whatsapp from "../assets/icon-green/whatsapp.svg";
import Location from "../assets/icon-green/location2.svg";
import Download from "../assets/icon-green/download.svg";
import ShubhamImage from "../assets/profiles_images/lightblue.png";
import Resume from "../assets/Resume_ShubhamNarkhede.pdf";
import { motion } from "framer-motion";
import { Button, Modal } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Sidebar = () => {
//   const handleEmailMe = () => {
//     window.open("mailto:shubhampnarkhede@gmail.com");
//   };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={ShubhamImage} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        <span>Shubham</span> Narkhede{" "}
      </div>
      <div className="sidebar__item sidebar__title">DevOps Engineer</div>
      <figure className="sidebar__social-icons my-2">
        <a
          href="https://github.com/spnarkhede"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://www.linkedin.com/in/spnarkhede/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://x.com/snarkhede1996?t=jFf8hHHKSjj1wpjbZoZZLQ&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://www.facebook.com/spnarkhede"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a
          href="https://www.instagram.com/lets.track.life/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a
            href="https://stackoverflow.com/users/22744195/spnarkhede"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Stack} alt="github" className="sidebar__icon mr-3" />
            Stack Overflow
          </a>
        </div>
        <div className="sidebar__item">
          <a
            className="sidebar__skype mr-3"
            href="https://medium.com/@shubhampnarkhede"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Medium} alt="github" className="sidebar__icon mr-2" />
            Medium
          </a>
          {/* <a
            className="sidebar__teams ml-2"
            href="https://discord.gg/GtmZSBMwnU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Teams} alt="github" className="sidebar__icon mr-2" />
            Teams
          </a> */}
        </div>
        <div className="sidebar__item">
          <img src={Phone} alt="github" className="sidebar__icon mr-2" />
          +49 171 510 8059
          {/* <a
            href="https://wa.me/qr/3OOS4GDMN3ZCN1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="whatsapp" className="sidebar__icon ml-2" />
          </a> */}
        </div>
        <div className="sub_sidebar__item">
          <img src={Location} alt="address" className="sidebar__icon" />
          Stuttgart, Germany.
        </div>
      </div>
      <a href={Resume} download="Resume_ShubhamNarkhede.pdf">
        <div className="sidebar__item sidebar__email">
          Resume{" "}
          <img src={Download} alt="download" className="sidebar__icon ml-2" />
        </div>
      </a>
      <Button className="sidebar__item sidebar__email" onClick={handleShow}>
        Contact Me
      </Button>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <ContactForm  className="modalborder" />
      </Modal>
    </motion.div>
  );
};

export default Sidebar;
