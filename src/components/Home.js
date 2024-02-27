// Home.js
import React from "react";
import Links from "./Links";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
      <Links /> {/* Make sure Links is used here */}
    </div>
  );
}

export default Home;
