import React from "react";
import yonghaoPhoto from "../assets/yonghao.jpg";

function Home() {
  return (
    <section className="home">
      <img src={yonghaoPhoto} alt="Yonghao Wang" className="home-photo" />
      <h2>Welcome!</h2>
      <p>Hi, I'm Yonghao, a web developer passionate about creating clean and efficient code.</p>
    </section>
  );
}

export default Home;