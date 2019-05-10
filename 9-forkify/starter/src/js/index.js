import string from './models/Search';

import {add, multiply, ID} from './views/searchView';


import axios from 'axios';

asnyc function getResults(query) {

    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const key = '7812d9a42541b351de36c88917fb5799';

    const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);

    console.log(res);

}

getResults('pizza');