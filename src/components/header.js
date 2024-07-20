import React from "react";

function Header() {
  let time = new Date();
  let hours = time.getHours();
  let mode;
  if (hours > 18) {
    mode = "night-mode";
  } else if (hours < 18) {
    mode = "day-mode";
  }
  return (
    <header className={`display-flex ${mode}`}>
      <div className="logo">Logo</div>
      <ul className="nav display-flex">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
