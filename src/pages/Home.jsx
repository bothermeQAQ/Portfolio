import React from "react";
import yonghaoPhoto from "../assets/yonghao.jpg";

function Home() {
  return (
    <section className="home">
      {/* Home Section */}
      <div className="home-content">
        <img src={yonghaoPhoto} alt="Yonghao Wang" className="home-photo" />
        <h2>Welcome!</h2>
        <p>Hi, I'm Yonghao, a web developer passionate about creating clean and efficient code.</p>
      </div>

      {/* About Me Section */}
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img src={yonghaoPhoto} alt="Yonghao Wang" className="about-photo" />
          <p>
            I'm a dedicated web developer with a strong passion for technology and problem-solving. My journey in
            development started at a young age, and I've continuously honed my skills to stay up to date with
            emerging trends. I believe in the power of clean, maintainable code to create scalable, efficient,
            and user-friendly applications.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>University of California, San Diego (UCSD)</h3>
            <p>Bachelor of Science in Cognitive Science - Expected 2025</p>
          </li>
          <li>
            <h3>Online Courses</h3>
            <p>Various web development and machine learning courses completed through platforms like Coursera, edX, and Udemy.</p>
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Web Developer Intern</h3>
            <p>Company Name - June 2024 - August 2024</p>
            <p>Worked on building and maintaining websites, ensuring responsiveness, and optimizing performance.</p>
          </li>
          <li>
            <h3>Freelance Web Developer</h3>
            <p>Self-employed - January 2023 - Present</p>
            <p>Developed several custom websites for small businesses, improving their online presence and user engagement.</p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Home;
