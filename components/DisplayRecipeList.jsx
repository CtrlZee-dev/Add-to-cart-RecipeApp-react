
// I will crate a function to display recipes n amount times, depending on the number of recipes fetched from the API.
//as well as depending on filter options selected by the user.

import RecipeCard from './RecipeCard';
export default function DisplayRecipeList({ recipes }) {
    return (
        <section className="displayRecipeList-container">
            {recipes.map((recipe, index) => (
                <RecipeCard 
                    key={index}
                    recipe={recipe}
                />
            ))}
        </section>
    );
}