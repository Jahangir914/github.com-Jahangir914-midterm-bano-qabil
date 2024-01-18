import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/carbg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>QuickShine</h1>
        <p>"Keeping It Clean, Keeping It Simple!"</p>
        <Link to="/menu">
          <button> Book Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
