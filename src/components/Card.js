import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      <p className="description">{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
