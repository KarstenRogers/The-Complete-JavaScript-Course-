import axios from 'axios';

async function getResults(query) {
    const key = '8acbb5e75aea4e134ed78cd18a287780';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }

}
getResults('chicken');