import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Cuisine from "./components/Cuisine";
import Dish from "./components/Dish";

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);

  const goHome = () => {
    setSelectedCuisine(null);
    setSelectedDish(null);
  };

  return (
    <div className="app">
      <h1 onClick={goHome} style={{ cursor: "pointer" }}>🍽️ Foody</h1>

      {!selectedCuisine && <Home onSelectCuisine={setSelectedCuisine} />}
      {selectedCuisine && !selectedDish && (
        <Cuisine cuisine={selectedCuisine} onSelectDish={setSelectedDish} />
      )}
      {selectedDish && <Dish dish={selectedDish} />}
    </div>
  );
}

export default App;