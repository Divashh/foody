import React from "react";

function Dish({ dish, onBack }) {
  const recipes = {
    "Pasta Carbonara": {
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan", "Pepper"],
      steps: [
        "Cook the spaghetti.",
        "Fry pancetta until crispy.",
        "Mix eggs and cheese.",
        "Combine all and season with pepper."
      ],
    },
    "Butter Chicken": {
      ingredients: ["Chicken", "Butter", "Tomato Sauce", "Cream", "Spices"],
      steps: [
        "Marinate the chicken.",
        "Cook with butter and tomato sauce.",
        "Add cream and spices.",
        "Simmer and serve with rice."
      ],
    },
  };

  const recipe = recipes[dish];

  return (
    <div className="dish">
      <button onClick={onBack} className="back-btn">⬅ Back</button>
      <h2>{dish}</h2>
      {recipe ? (
        <>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h3>Steps:</h3>
          <ol>
            {recipe.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </>
      ) : (
        <p>Recipe coming soon...</p>
      )}
    </div>
  );
}

export default Dish;