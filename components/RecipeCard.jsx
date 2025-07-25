// I am going to create a funcion that will be responisble for displaying A recipe.
// wWITH  THEIR RELEVANT details such as Recipe Name, image, and category. 
import './styling/recipeCard.css';
export default function RecipeCard({recipe,handleView,addToCart}) {
     console.log('RecipeCard props:', { recipe, addToCart });

  const handleAdd = () => {
    console.log(" Add to Cart button was clic for:", recipe);
    addToCart(recipe); }

   
    return (
        <div>
        
                <div className="recipeCard-container" key={recipe.id}>
                    <img className='recipeCard-img' src={recipe.image} alt="Recipe image" />
                        
                        
                    <button className='add-to-cart' onClick={handleAdd}>Add to Cart</button>
                    {/* <p>{recipe.category}</p> */}
                    <h2>{recipe.name}</h2>
                    <button className='recipeCard-btn' onClick={handleView}>View Recipe</button>
                </div>
     
        </div>
    );
}


//cd add-to-cart-recipe-app