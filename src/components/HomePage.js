import React from "react";
import { useHistory } from "react-router-dom";
function HomePage() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/FormPage");
  };
  return (
    <div>
      <div>
        <h1>Teknolojik Yemekler</h1>
      </div>
      <div>
        <h2>KOD ACIKTIRIR</h2>
        <h2>PİZZA, DOYURUR</h2>
        <button onClick={handleButtonClick}>Acıktım!</button>
      </div>
    </div>
  );
}

export default HomePage;
