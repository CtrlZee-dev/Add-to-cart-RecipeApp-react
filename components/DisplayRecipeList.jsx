
// I will crate a function to display recipes n amount times, depending on the number of recipes fetched from the API.
//as well as depending on filter options selected by the user.
import { useState } from 'react'
import RecipeCard from './RecipeCard';
import RecipeView from './RecipeView';
import './styling/displayRecipeList.css';

export default function DisplayRecipeList({ recipes ,addToCart}) {
    const [isVisible, setIsVisible] = useState(false);
    const handleView = () => {
        setIsVisible(!isVisible);
    };
    return (
        <section className="displayRecipeList-container">
            {recipes.map((recipe, index) => (
                <RecipeCard 
                    key={index}
                    handleView={handleView}
                    recipe={recipe}
                    addToCart={addToCart} 
                />
             
            ))}
        </section>
    );
}