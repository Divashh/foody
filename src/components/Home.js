import React from "react";

function Home({ onSelectCuisine }) {
  const cuisines = ["Italian", "Indian", "Chinese", "Mexican", "Thai", "American"];

  return (
    <div className="home">
      <h2>Choose a Cuisine</h2>
      <div className="cuisine-list">
        {cuisines.map((cuisine) => (
          <button key={cuisine} onClick={() => onSelectCuisine(cuisine)}>
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;