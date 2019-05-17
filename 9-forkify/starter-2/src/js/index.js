import Search from './models/Search';

/** Global State of the App
 * - Search object
 * - Current recipe object
 * - shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = 'pizza';

    if (query) {
        // 2. New Search object and add to state
        state.search = new Search(query);

        // 3. prepare UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        console.log(state.search.result)
    }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();