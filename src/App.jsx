
import RecipeCard from '../components/RecipeCard'
import RecipeView from '../components/RecipeView'
import DisplayRecipeList from '../components/DisplayRecipeList'
import './App.css'
import {  useState,useEffect } from 'react'

function App() {
  const [recipesToDisplay, setRecipesToDisplay]= useState([]);
 // async fetch function
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
    <>
    <DisplayRecipeList recipes={recipesToDisplay}  />
    <RecipeView />

    </>
  )
}

export default App
