import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt="" />
      <h3>{props.name}</h3>
      <p>Ph: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Card;
