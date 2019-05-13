import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
    const key = '8acbb5e75aea4e134ed78cd18a287780';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        // console.log(this.result);
    } catch (error) {
        alert(error);
        }
    }
}