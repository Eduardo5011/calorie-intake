import React, {useContext} from 'react';
import { RecipesContext } from '../context/RecipesContext';

const SavedItems = () => {
  const {savedMeals} = useContext(RecipesContext);
  return (
    <div>
    <h2>Saved Meals</h2>
    <div className="saved-meals-container">
      {savedMeals.map(meal => (
        <div key={meal.id} className="saved-meal">
          <h3>{meal.title}</h3>
          <img src={meal.image} alt={meal.title} />
          <ul>
            <li>Preparation Time: {meal.readyInMinutes} minutes</li>
            <li>Number of Servings: {meal.servings}</li>
          </ul>
          <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
            Go to Recipe
          </a>
        </div>
      ))}
    </div>
  </div>
  )
}
export default SavedItems