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

