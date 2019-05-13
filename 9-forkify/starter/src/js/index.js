import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from "./views/base";

//gloabl state of app
// Search object
//current recipe object
//shopping list object
//liked recipes

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();

        await state.search.getResults();

        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});