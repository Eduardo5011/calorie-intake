import { useState, useEffect } from "react";


const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false
            `
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions1">
        <li>Preparation Time: {meal.readyInMinutes} minutes</li>
        <li>Number of Servings: {meal.servings}</li>
      </ul>
      <a className="text" target="_blank" rel="noreferrer" href={meal.sourceUrl}>
        Go to recipe
      </a>
    </article>
  );
};
export default Meal;
