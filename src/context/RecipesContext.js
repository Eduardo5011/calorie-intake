import React, {createContext, useState} from 'react';


export const RecipesContext = createContext()

export const RecipesProvider = ({children}) => {
    const [savedMeals, setSavedMeals] = useState([]);

    const addMeal = meal => {
        setSavedMeals(prev =>[...prev, meal])
    }

    return (
        <RecipesContext.Provider value={{savedMeals, addMeal}}>
            {children}
        </RecipesContext.Provider>
    )
}