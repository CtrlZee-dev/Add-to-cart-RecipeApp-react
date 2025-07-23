// I am going to create a functiont that will display A RECIPE w/ thier relevant details such as recipe name, image, preptime, ingredients and instructions.
import './styling/recipeView.css';
export default function RecipeView() {
    return(
        <section className="recipeView-container">  
          
            <img className='recipeView-img ' src="https://picsum.photos/id/237/200/300" alt="Recipe Image" />
            <h1>Recipe Name</h1>
            <p>Prep Time: 30 minutes</p>
            <h2>Ingredients</h2>
            <ul>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
            </ul>
            <h2>Instructions</h2>
            <p>Step 1: Do this</p>
            <p>Step 2: Do that</p>  

        </section>
    );
}