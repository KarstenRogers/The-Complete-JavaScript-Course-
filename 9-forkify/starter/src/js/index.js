import axios from 'axios';

async function getResults(query) {
    const key = '8acbb5e75aea4e134ed78cd18a287780';
    const res = await axios(`http://food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res);
}
getResults();