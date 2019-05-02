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

age = 'twenty eight';
job = 'driver';

alert(firstName + 'is a' + age + 'year old' + job + '.Is he Married?' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + '' + lastName);
