import React from "react";
import "./about.css";
import Ab from "../../assets/Foto1.jpg";
import AboutBox from "./AboutBox";
import CV from "../../assets/CV.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About me</h2>
      <div className="about__container grid">
        <img src={Ab} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a junior backend developer with experience in Java, having a
              solid understanding of backend application development and a
              growing comprehension of software engineering best practices. I
              also have experience in frontend development using React, which
              enables me to approach projects holistically and contribute to
              both aspects of web development.
            </p>
            <a download="" href={CV} className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar Java">
                <span className="skills__percentage"></span>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">SQL</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar SQL">
                <span className="skills__percentage"></span>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">C#</h3>
                <span className="skills__number">50%</span>
              </div>
              <div className="skills__bar C">
                <span className="skills__percentage"></span>
              </div>
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar Javascript">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
