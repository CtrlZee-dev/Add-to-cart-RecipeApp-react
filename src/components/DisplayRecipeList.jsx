
import RecipeCard from './RecipeCard';


import DisplayRecipeStyles from'./styling/displayRecipeList.module.css';

export default function DisplayRecipeList({ recipes, addToCart, handleView }) {
  return (
    <section className={DisplayRecipeStyles.displayRecipeListContainer}>
      {recipes.map((recipe) => (
        <RecipeCard 
          key={recipe.id}
          recipe={recipe}
          addToCart={addToCart}
          handlePreView={() => handleView(recipe)}
        />
        
      ))}
    </section>
  );
}
