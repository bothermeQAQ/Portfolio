import React from "react";
import yonghaoPhoto from "../assets/yonghao.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <img src={yonghaoPhoto} alt="Yonghao Wang" className="home-photo" />
        <h2>Welcome!</h2>
        <p>
          Hi, I'm Yonghao, a web developer passionate about creating clean and efficient code.
        </p>
      </div>
      
      {/* Education Section */}
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>University of California, San Diego (UCSD)</h3>
            <p>Bachelor's in Data Science, Expected Graduation: 2027</p>
          </li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>UCSD CSSA Website Intern</h3>
            <p>
              Led and maintained the UCSD CSSA website, updating front-end designs and improving user experience; developed front-end components using Vue.js.
            </p>
          </li>
          <li>
            <h3>Quit Smoking Chatroom App Developer</h3>
            <p>
              Built a social app from scratch, implementing user registration, login, and database management; integrated front-end and back-end systems seamlessly.
            </p>
          </li>
          <li>
            <h3>Junior Varsity Tennis Team Member</h3>
            <p>
              Played for the Patrick Henry High School tennis team for two years, enhancing teamwork and leadership skills.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
