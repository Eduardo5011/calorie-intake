import React, {useContext} from 'react';
import { RecipesContext } from '../context/RecipesContext';

const SavedItems = () => {
  const {savedMeals} = useContext(RecipesContext);
  return (
    <div>
      <h1>Saved Meals</h1>
      {savedMeals.map((meal) => (
        <div key={meal.id}>{meal.title}</div>
      ))}
    </div>
  )
}
export default SavedItems