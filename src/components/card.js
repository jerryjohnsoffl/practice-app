import React, { useState } from "react";
import heart from "../assets/heart.svg";

function Card(props) {
  let favorites = useState("Add to favorites");
  let [btnText, setBtnText] =  favorites;
  let activeClass = useState("");
  let [classState, setClassState] = activeClass;

  function addToFavorites(imgSrc) {
    setBtnText((prevState)=>{
      if(prevState==="Add to favorites") {
        props.getFavImages(imgSrc);
        return "Added to favorites";
      } else {
        props.removeImages(imgSrc)
        return "Add to favorites";
      }
    });
    setClassState((prevClass)=>{
      if(prevClass==="") {
        return "active";
      } else {
        return "";
      }
    })
  }
  return (
    <div className={`card ${classState}`}>
      <img src={`${heart}`} alt="" className="icon" />
      <img src={props.imgSrc} alt="" />
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <button onClick={()=> {
        addToFavorites(props.imgSrc)
      }} className="button">{btnText}</button>
    </div>
  );
};

export default Card;
