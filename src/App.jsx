import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css"; // 确保引入全局样式

// 确保正确导入组件
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* 顶部导航栏 */}
        <header className="top">
          <h1>Yonghao Wang's Portfolio</h1>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* 主体内容 */}
        <main className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* 底部模块 */}
        <footer className="bottom">
          <p>© 2024 Yonghao Wang. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
