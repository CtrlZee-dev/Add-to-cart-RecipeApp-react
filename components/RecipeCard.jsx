// I am going to create a funcion that will be responisble for displaying A recipe.
// wWITH  THEIR RELEVANT details such as Recipe Name, image, and category. 
import './styling/recipeCard.css';
export default function RecipeCard({recipe}) {

    return (
        <div>
          
                <div className="recipeCard-container" key={recipe.id}>
                    <img className='recipeCard-img' src={recipe.image} alt="Recipe image" />
                    <button className='add-to-cart'>Add to Cart</button>
                    {/* <p>{recipe.category}</p> */}
                    <h2>{recipe.name}</h2>
                    <button className='recipeCard-btn'>View Recipe</button>
                </div>
     
        </div>
    );
}