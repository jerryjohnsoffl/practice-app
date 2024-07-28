import "./styles.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Card from "./components/card";
import cardData from "./components/cardComponents";
import React, { useState } from "react";

function MyApp() {

  let [favImages, setFavImages] = useState([]);

  function getFavImages(imgSrc) {
    setFavImages([...favImages, imgSrc]);
  }

  function removeImage(imgSrc) {
    setFavImages(favImages.filter((i)=> {
      return i !== imgSrc;
    }))
  }

  let userFavImg = favImages.map((imgSrc)=> {
    return(
      <img src={imgSrc} />
    )
  })

  let card = cardData.map((cardItem)=>{
    return(
      <Card 
        imgSrc={cardItem.imgSrc}
        name={cardItem.name}
        description={cardItem.description}
        getFavImages={getFavImages}
        removeImages={removeImage}
      />
    )
  });
  return (
    <div className="body">
      <Header />
      <Hero />
      <h2 className="destination">Destinations</h2>
      <div className="fav-container">
      <div className="card-container">
        {card}
      </div>
      <aside>
          <h2 className="destinations">favorites</h2>
          {userFavImg}
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
