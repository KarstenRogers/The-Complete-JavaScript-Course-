import axios from 'axios';

async function getResults(query) {
    const key = '00e0368da14481d74d39bf237197701e';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza');

// 00e0368da14481d74d39bf237197701e