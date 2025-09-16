// I am going to create a functiont that will display A RECIPE w/ thier relevant details such as recipe name, image, preptime, ingredients and instructions.
import './styling/recipeView.css';

export default function RecipeView({ recipe, isVisible }) {
    if (!isVisible) return null; // Don't render if not visible

    return (
        <section className="recipeView-container">
            <img src={recipe.img} alt={`${recipe.name} image`} />
            <h1>{recipe.name}</h1>
            <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
            <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>

            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <p>Step 1: Do this</p>
            <p>Step 2: Do that</p>
        </section>
    );
}


/*




*/