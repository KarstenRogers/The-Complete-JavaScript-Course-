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