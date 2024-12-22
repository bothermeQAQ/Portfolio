import React from "react";
import yonghaoPhoto from "../assets/yonghao.jpg";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-section">
          <img src={yonghaoPhoto} alt="Yonghao" className="about-photo" />
          <p>
            Hello! My name is <span className="highlight">Yonghao Wang</span>, and I am currently a <strong>Data Science student</strong> at UCSD, expected to graduate in <strong>2027</strong>. 
            I am passionate about building <span className="highlight">efficient</span>, user-friendly applications and diving deep into the world of data. 
            With a strong foundation in programming, I have experience working with JavaScript, React, and Python.
          </p>
        </div>

        <div className="about-section">
          <img src={yonghaoPhoto} alt="Coding" className="about-photo" />
          <p>
            I love writing code, especially when I'm solving tough problems or building something meaningful. 
            The satisfaction of <em>debugging</em> and watching my solutions work perfectly keeps me motivated.
          </p>
        </div>

        <div className="about-section">
          <img src={yonghaoPhoto} alt="Gaming" className="about-photo" />
          <p>
            Gaming is not just a pastime for me; it’s a way to stay sharp. It helps me think strategically, solve problems creatively, and take breaks to stay refreshed. 
          </p>
        </div>

        <div className="about-section">
          <img src={yonghaoPhoto} alt="Tennis" className="about-photo" />
          <p>
            Tennis is another passion of mine. The sport has taught me <span className="highlight">discipline</span>, <span className="highlight">focus</span>, and the importance of persistence. 
            Every match feels like debugging code—a mix of challenge and reward.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
