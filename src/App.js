import "./styles.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Card from "./components/card";

function MyApp() {
  return (
    <div>
      <Header />
      <Hero />
      <Card
        imgSrc="https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Web Diary"
        phone="0123456"
        email="test@gmail.com"
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Debug Media"
        phone="0123456"
        email="debug@gmail.com"
      />
      <Card
        imgSrc="https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Tintu Vlogger"
        phone="0123456"
        email="tintu@gmail.com"
      />
      <Footer />
    </div>
  );
}

export default MyApp;
