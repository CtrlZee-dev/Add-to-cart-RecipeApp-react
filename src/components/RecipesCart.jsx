
import RecipeCartStyles from "./styling/RecipeCart.module.css";

export default function RecipesCart({ cartItems, onClose }) {
  return (
    <section className={RecipeCartStyles.cartContainer}>
      <button className={RecipeCartStyles.closeBtn} onClick={onClose}>✖</button>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No recipes added to cart yet.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name}
                <br />
                <img src={item.image} alt={item.name} width={80} />
              </li>
            ))}
          </ul>
          <p>Total Recipes: {cartItems.length}</p>
        </>
      )}
      <button className={RecipeCartStyles.checkoutBtn}>Checkout</button>
    </section>
  );
}
