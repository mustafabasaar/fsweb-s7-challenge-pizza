import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePage.css";
function HomePage() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/FormPage");
  };
  return (
    <div className="background">
      <div className="homepage-container">
        <div className="homepage-topic">
          <h1>Teknolojik Yemekler</h1>
        </div>
        <div className="homepage-text">
          <h2>KOD ACIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
        </div>
        <button className="homepage-button" onClick={handleButtonClick}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
}

export default HomePage;
