
import RecipeCardStyles from './styling/recipeCard.module.css';
export default function RecipeCard({ recipe, handlePreView, addToCart }) {

  const handleAdd = () => addToCart(recipe);

  return (
    <div className= {RecipeCardStyles.recipeCardContainer}>
      <img className={RecipeCardStyles.recipeCardImg} src={recipe.image} alt={recipe.name} />
      <button className={RecipeCardStyles.add2Cart} onClick={handleAdd}>Add to Cart</button>
      <h2>{recipe.name}</h2>
      <button className={RecipeCardStyles.recipeCardBtn} onClick={handlePreView}>View Recipe</button>
    </div>
  );
}
