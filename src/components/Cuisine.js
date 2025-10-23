import React from "react";

function Cuisine({ cuisine, onSelectDish, onBack }) {
  const dishes = {
    Italian: ["Pasta Carbonara", "Margherita Pizza", "Tiramisu"],
    Indian: ["Butter Chicken", "Paneer Tikka", "Biryani"],
    Chinese: ["Fried Rice", "Kung Pao Chicken", "Dumplings"],
  };

  return (
    <div className="cuisine">
      <button onClick={onBack} className="back-btn">⬅ Back</button>
      <h2>{cuisine} Dishes</h2>
      <div className="dish-list">
        {dishes[cuisine]?.map((dish) => (
          <button key={dish} onClick={() => onSelectDish(dish)}>
            {dish}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cuisine;