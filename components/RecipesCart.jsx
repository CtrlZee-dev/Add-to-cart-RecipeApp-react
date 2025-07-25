// I will create a function that will display the user's cart with relevant details such as :
// a list of recipes added to the cart, qith details like recipe name, image, and a category and total recipes in the cart.
export default function RecipesCart({ cartItems }) {
    return (

    <section className="recipesCart-container">
      {cartItems.length === 0 ? (
        <>
          <h1>Your Cart</h1>
          <p>No recipes added to cart yet.</p>
          <button className='checkout-btn'>Checkout</button>
        </>
      ) : (
        <>
          <h1>Your Cart</h1>
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
          <button className='checkout-btn'>Checkout</button>
        </>
      )}
    </section>

        
    );
}