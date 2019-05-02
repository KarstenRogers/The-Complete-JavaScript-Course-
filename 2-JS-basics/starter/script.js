/*******************************
*Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var $3years = 3;
 */

/*******************************
 *Variables mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

console.log(firstName + '' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a' + age + 'year old' + job + '.Is he Married?' + isMarried);

/*******************************
 *Variables mutation
 */
/*
age = 'twenty eight';
job = 'driver';

alert(firstName + 'is a' + age + 'year old' + job + '.Is he Married?' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + '' + lastName);
*/


/*******************************
 *Basic Operators
 */
/*
var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 //math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
 */

/*******************************
 *Operator Precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);
 */


/*******************************
 *If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :(');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :(');
}

var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 92; // kg
var heightJohn = 1.95; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*******************************
 *Boolean logic
 */
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
 */

/*******************************
 *The Ternary Operator and Switch Statements
 */
//Ternary Operator
    /*
var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer.')
    : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statements
var job = 'driver';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
     */

/*******************************
 *Truthy and Falsy Values and Equality Operators
 */
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

if (height === '23') {
    console.log('the == operator does type coercion!');
}
 */

/*******************************
 *Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageKim = calculateAge(1969);
console.log(ageJohn, ageMike, ageKim);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
        console.log(console.log(firstName + ' retires in ' + retirement + ' years.'));
    } else {
        console.log(firstName + ' is already retired.')
    }
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1948,'Mike');
yearsUntilRetirement(1965,'Kim');
 */

/*******************************
 *Function Statements and Expressions
 */

var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher' :
            return firstName + ' teaches kids how to code';
        case 'driver' :
            return firstName + ' drives a cab in Libson.';
        case 'designer' :
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('designer', 'John'));
console.log(whatDoYouDo('stay home', 'Jane'));
console.log(whatDoYouDo('driver', 'Mark'));

















