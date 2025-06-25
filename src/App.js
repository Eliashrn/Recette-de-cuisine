import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [dataMeal, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = inputSearch.trim() === "" ? "chicken" : inputSearch;

    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => {
        if (res.data.meals) {
          setMealsData(res.data.meals);
          setError(false);
        } else {
          setMealsData([]);
          setError(true);
        }
      })
      .catch(() => {
        setMealsData([]);
        setError(true);
      });
  }, [inputSearch]);

  return (
    <div className="container">
      <div className="header">
        <h1>Elias Cook ! </h1>
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment (en anglais)"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        {error && (
          <p className="error">Oups.. je ne connais pas "{inputSearch}".</p>
        )}
      </div>

      <div className="meal-container">
        {dataMeal.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
