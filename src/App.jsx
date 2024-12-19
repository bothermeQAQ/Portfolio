import React from "react";
import "./App.css";
import yonghaoPhoto from './assets/yonghao.jpg'; // 引入图片

function App() {
  return (
    <>
      {/* 导航栏 */}
      <header className="navbar">
        <h1>Yonghao Wang's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Home 模块 */}
      <section id="home" className="home">
        <h2>Welcome!</h2>
        <p>Hi, I'm Yonghao, a web developer passionate about creating clean and efficient code.</p>
      </section>

      {/* About Me 模块 */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          {/* 左边图片 */}
          <img src={yonghaoPhoto} alt="Yonghao Wang" className="about-photo" />
          {/* 右边文字 */}
          <p>
            I am a developer with experience in JavaScript, React, and Python. I enjoy solving challenging problems
            and constantly learning new skills to improve my craft.
          </p>
        </div>
      </section>

      {/* Projects 模块 */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <ul>
          <li>
            <h3>Portfolio Website</h3>
            <p>A personal website to showcase my work and skills.</p>
          </li>
          <li>
            <h3>DSC30 Projects</h3>
            <p>Various assignments completed during my coursework.</p>
          </li>
        </ul>
      </section>

      {/* Contact 模块 */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          You can reach me via email at <a href="mailto:yonghaowang16@gmail.com">yonghaowang16@gmail.com</a>.
        </p>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <p>© 2024 Yonghao Wang. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
