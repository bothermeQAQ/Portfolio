import React from "react";
import yonghaoPhoto from "../assets/yonghao.jpg";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={yonghaoPhoto} alt="Yonghao Wang" className="about-photo" />
        <p>
          I am a developer with experience in JavaScript, React, and Python. I enjoy solving challenging problems
          and constantly learning new skills to improve my craft.
        </p>
      </div>
    </section>
  );
}

export default About;