import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from "./views/base";

/** Global State of the App
 * - Search object
 * - Current recipe object
 * - shopping list object
 * - Liked recipes
 */
const state = {};


/**
 * Search Controller
 */
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2. New Search object and add to state
        state.search = new Search(query);

        // 3. prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // Try does this--> test a block of code for errors
        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            // The catch statement lets you handle the error
            alert('Something Went wrong');
            clearLoader();
        }
    }
};

// This Handles when the person hits the search button
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// Adding Click Event to the btn-inline target with closest
elements.searchResPages.addEventListener('click', e => {
   const btn = e.target.closest('.btn-inline');

   // If statement on next and prev button pages
   if (btn) {
       const goToPage = parseInt(btn.dataset.goto, 10);
       searchView.clearResults();
       searchView.renderResults(state.search.result, goToPage);
   }
});

/**
 * Recipe Controller
 */
const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for Changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get Recipe data and Parse Ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render Recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (err) {
            alert('error while processing recipe');
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
// // window.addEventListener('load', controlRecipe);

// Same as the two above just put them in an array and do for each function

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
