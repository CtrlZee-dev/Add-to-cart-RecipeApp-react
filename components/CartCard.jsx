 
 export default function CartCard({ recipe }) {
    return (
        <div className="cart-card">
            <img src={recipe.image} alt={recipe.name} className="cart-card-image" />
            <div className="cart-card-details">
                <h2 className="cart-card-title">{recipe.name}</h2>
             
            </div>
        </div>
    );}