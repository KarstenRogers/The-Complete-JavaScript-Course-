import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
    const key = 'e9cf53a4b308d32e279d32b5fa706eb8';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        // console.log(this.result);
    } catch (error) {
        alert(error);
        }
    }
}