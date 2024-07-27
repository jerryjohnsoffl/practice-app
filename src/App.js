import "./styles.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Card from "./components/card";
import cardData from "./components/cardComponents";

function MyApp() {
  let card = cardData.map((cardItem)=>{
    return(
      <Card 
        imgSrc={cardItem.imgSrc}
        name={cardItem.name}
        description={cardItem.description}
      />
    )
  });
  return (
    <div>
      <Header />
      <Hero />
      <h2 className="destination">Destinations</h2>
      <div className="card-container">{card}</div>
      <Footer />
    </div>
  );
}

export default MyApp;
