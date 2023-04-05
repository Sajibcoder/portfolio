import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Exprience</h5>
              <small>Fresher</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>



          <p>I'm a <b> Front-End Developer </b> located in West Bengal, India. I have a serious passion for UI effects, creative intuitive, dynamic user experiences. Well-organised person, problem solver, coding enthusiast with high attention to detail. Interested in the entire frontend spectrum and meeting up with creative, ambitious peoples. I enjoy designing and devloping creative, unique websites with my skillsets. I am proficient in front-end technologies like HTML, CSS, JAVASCRIPT; the frameworks and libraries like BOOTSTRAP, SASS, REACT JS, REDUX etc. I am a strong team player with excellent communication and interpersonal skills. And i am committed to delivering high quality solutions that exceed client expectations and am always looking for ways to improve my skills and stay up-tp-date with the latest industry trends.</p>

        </div>
      </div>
    </section>
  );
};

export default About;



// 