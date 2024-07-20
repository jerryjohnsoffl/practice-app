import React from "react";

function Hero() {
  let hero = "Hero Image";
  let styles = { color: "#fff", backgroundColor: "#000" };
  return (
    <div className="hero display-flex">
      <h3 style={styles}>{`${hero}`}</h3>
    </div>
  );
}

export default Hero;
