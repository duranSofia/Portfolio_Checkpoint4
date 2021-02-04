import React from "react";
import About from "../components/About";

export default function Home() {
  return (
    <div style={{ margin: "20px auto", width: "80%", textAlign: "center" }}>
      <h1>Sofia Duran</h1>
      <h3>Web Developer</h3>
      <img
        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
        alt="cover"
        width="250"
        height="250"
      />

      <About />
    </div>
  );
}
