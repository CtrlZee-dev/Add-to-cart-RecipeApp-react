import { useState, useEffect, useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext"; 
import DisplayRecipeList from "./components/DisplayRecipeList";
import RecipesCart from "./components/RecipesCart";
import Header from "./components/Header";
import RecipePreviewModal from "./components/RecipePreviewModal";
import Login from "./components/Login";
import Register from "./components/Register";
import SuccessModal from "./components/SuccessModal";
import "./App.css";

function App() {
  const { user,authMode,setAuthMode,login,register,showSuccessModal,setShowSuccessModal} = useContext(AuthenticationContext); 

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipesToDisplay, setRecipesToDisplay] = useState([]);
  const [cartView, setCartView] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  


  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipesToDisplay(data.recipes);
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
    };

    fetchAllRecipes();
  }, []);

  const handleRecipeView = (recipe) => setSelectedRecipe(recipe);
  const handleClose = () => setSelectedRecipe(null);
  const viewCart = () => {
    setCartView(() => cartView ? false : true);
  };

  const addToCart = (recipe) => {
    console.log("Adding to cart:", recipe);
    setCartItems((cartItems) => [...cartItems, recipe]);
  };

  const handleLoginSuccess = (user) => login(user);

  const handleRegisterSuccess = (user) => {
    register(user, () => {
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000);
    });
  };

  return (
    <>
      <Header viewCart={viewCart}  />

      {showSuccessModal && (
        <SuccessModal
          message="User successfully registered and logged in!"
          onClose={() => setShowSuccessModal(false)}
        />
      )}

      <div className="app-container">
        {user ===null ? (
          //Authentication and reg starts heere
          authMode === "login" ?
           (
            <Login
              onLoginSuccess={handleLoginSuccess}
              switchToRegister={() => setAuthMode("register")}
            />
          ) : 
          (
            <Register
              onRegisterSuccess={handleRegisterSuccess}
              switchToLogin={() => setAuthMode("login")}
            />
          )
        ) :
        //Should user be logged in 
        (
          <>
            <DisplayRecipeList
              recipes={recipesToDisplay}
              addToCart={addToCart}
              handleView={handleRecipeView}/>

            {cartView && (
              <RecipesCart
                cartItems={cartItems}
                onClose={() => setCartView(false)}/>
            )}

            {selectedRecipe && (
              <RecipePreviewModal
                recipe={selectedRecipe}
                onClose={handleClose} />
            )}
          </>
        )}



      </div>
    </>
  );
}

export default App;
