import ReactDOM from "react-dom";
import RecipeCardstyles from "./styling/RecipePreview.module.css";

export default function RecipePreviewModal({ recipe, onClose }) {
  if (!recipe) return null;

  const modalRoot = document.getElementById("modal-recipe-preview");
  if (!modalRoot) return null;


  return ReactDOM.createPortal(
    <div className={RecipeCardstyles.overlay} >
      <div className={RecipeCardstyles.content}>
        <button className={RecipeCardstyles.closeBtn} onClick={onClose}>✖</button>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} width="200" />
        <p><strong>Ingredients:</strong> {recipe.ingredients?.join(", ")}</p>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      </div>
    </div>,
    modalRoot
  );
}
