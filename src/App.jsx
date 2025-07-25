
import RecipeView from '../components/RecipeView'
import DisplayRecipeList from '../components/DisplayRecipeList'
import RecipesCart from '../components/RecipesCart'
import Header from '../components/Header'
import './App.css'
import {  useState,useEffect } from 'react'

function App() {
  const [recipesToDisplay, setRecipesToDisplay]= useState([]);
  const [cartView, setCartView] = useState(false);
  const [cartItems, setCartItems] = useState([]);

const viewCart = () => {
  setCartView(() => cartView ? false : true);
};

const addToCart = (recipe) => {
  console.log("Adding to cart:", recipe);
  setCartItems((prev) => [...prev, recipe]);
};



  const fetchAllRecipes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      console.log("Fetched recipes:", data.recipes);
      setRecipesToDisplay(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);
 

  return (
    < >
      <Header viewCart={viewCart}/>
      <div className='app-container'>
        <DisplayRecipeList recipes={recipesToDisplay}  addToCart={addToCart}  />
        {cartView ? (<RecipesCart cartItems={cartItems} />) : null}
    </div>

 

    </>
  )
}

export default App
