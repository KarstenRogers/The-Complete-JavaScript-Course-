// let and const
/*
//ES5
var name = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
 */

//ES5
/*
function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1998;

        console.log(firstName + ', born in' + yearOfBirth
            + ', is now officially allowed to drive a car.'
        );
    }
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {

    let firstName;
    const yearOfBirth = 1998;

    if (passedTest) {
        firstName = 'John';

        console.log(firstName + ', born in' + yearOfBirth
            + ', is now officially allowed to drive a car.'
        );
    }
}

driversLicence6(true);
 */

//////////////////////////////////////////////////
// Blocks and IIFEs
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}
 */


//////////////////////////////////////////////////
// Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1998;

function calcAge(year) {
    return 2019 - year;
}

console.log(`This is ${firstName} ${lastName}. He was born in
${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('sm'));
 */

//////////////////////////////////////////////////
// Arrow Functions: Basics
/*
const years = [1998, 1965, 1969, 1974];

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age
 element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}:
    ${age}.`
});
console.log(ages6);
 */


//////////////////////////////////////////////////
// Arrow Functions: Lexical 'this' Keyword

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        var self = this;
        document.querySelector('.green').addEventListener(
            'click', function () {
                var str = 'this is box number' + self.position + ' and it is' +
                    self.color;
                alert(str);
            }
        )
    }
};
box5.clickMe();


//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {

        document.querySelector('.green').addEventListener(
            'click', () => {
                var str = 'this is box number' + this.position + ' and it is' +
                    this.color;
                alert(str);
            }
        )
    }
};
box6.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 =
    function (friends) {
        var arr = friends.map(function (el) {
            return this.name + ' is friends with' + el;
        });
        console.log(arr);
}
 */


/////////////////////////////////
// Lecture: Destructuring


// ES5
/*
var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
 */


/////////////////////////////////
// Lecture: Arrays


const boxes = document.querySelectorAll('.box');

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5
for(var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';

}


//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}




//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
 */


/////////////////////////////////
// Lecture: The Spread Operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);
 */



/////////////////////////////////
// Lecture: Rest parameters

//ES5
/*
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}


//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}


//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
 */

/////////////////////////////////
// Lecture: Default parameters


// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
 */


///////////////////////////////
// Lecture: Maps

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);


if(question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here')
}

//question.clear();


//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
 */


/////////////////////////////////
// Lecture: Classes

//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
 */


/////////////////////////////////
// Lecture: Classes and subclasses


//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
 */



/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

// One Town Element
// PARKS
class Parks {
    constructor(name, year, trees, area,) {
        this.name = name;
        this.year = year;
        this.trees = trees;
        this.area = area;
    }

    //Tree density of each park in the town
    treeDensity() {
        let density = this.trees / this.area;
        console.log(this.name + " has a tree desinty of " + density + " trees per square km.");
    }

    //3.
    bigPark() {
        if(this.trees > 1000) {
            console.log(this.name + " has more than 100 trees.");
        }
    }
}

// Setting the 3 Parks
const park1 = new Parks("Park1", 1950, 500, 10);
const park2 = new Parks("Park2", 1930, 700, 20);
const park3 = new Parks("Park3", 1900, 1200, 40);

//Average age of each town's park
function calcAge(el1, el2, el3) {
    a = new Date().getFullYear() - el1.year;
    b = new Date().getFullYear() - el2.year;
    c = new Date().getFullYear() - el3.year;
    var avr = Math.floor((a + b + c) / 3);
    console.log("Our 3 parks have an average age of " + avr + " years.");
}

const p = "-----PARKS REPORT-----"
console.log(p);
calcAge(park1, park2, park3);
park1.treeDensity();
park2.treeDensity();
park3.treeDensity();
park3.bigPark();


// One Town Element
// STREETS
class Streets {
    constructor(name, year, length) {
        this.name = name;
        this.year = year;
        this.length = length
    }
}

// Setting the 4 Streets
const street1 = new Streets("Street1", 1970, 5);
const street2 = new Streets("Street2", 1950, 10);
const street3 = new Streets("Street3", 1930, 20);
const street4 = new Streets("Street4", 1910, 40);


//Total and average length of the town's streets
function total() {
    var average = (street1.length + street2.length + street3.length + street4.length) / 4;
    var total = street1.length + street2.length + street3.length + street4.length;
    console.log("Our 4 streets have a total lenght of " + total + " km, with an average of " + average + " km.");
}

//Total length of the town's streets
function totalStr() {
    var totalStr = street1.length + street2.length + street3.length + street4.length;
    console.log(totalStr);
}

//Street Size
function size(el) {
    if (el.length < 6) {
        console.log(el.name + " is a tiny street.")
    } else if(el.length < 11) {
        console.log(el.name + " is a small street.")
    } else if(el.length < 21) {
        console.log(el.name + " is a normal street.")
    } else if(el.length < 41) {
        console.log(el.name + " is a big street.")
    } else {
        console.log(el.name + " is a normal street.")
    }
}

const s = "-----STREETS REPORT-----"
console.log(s);
total();
size(street1);
size(street2);
size(street3);
size(street4);

