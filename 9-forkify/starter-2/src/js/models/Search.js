import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

     async getResults() {
        const key = 'c09d705a02dc13a6b5ae8983cd9190f1';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

