// Constructor and super

console.log("starting app js");

const string = 'some text'; // string literal
const number = 15; // number literal
const myObject = {name: 'Janatbek'}; // object literal
const myArray = [1,2,3,4,5]; // array literal
const isTruthy = true; // boolean literal

console.log(string, number, myObject, myArray, isTruthy);


const stringWithNewKeyword = new String('some text');
const numberWithNewKeyword = new Number(15);
const myObjectWithNewKeyword = new Object({name: 'Janatbek'});
const myArrayWithNewKeyword = new Array(1,2,3,4,5); // array literal
const isTruthyWithNewKeyword = new Boolean(true); // boolean literal

console.log(stringWithNewKeyword, numberWithNewKeyword, myObjectWithNewKeyword, myArrayWithNewKeyword, isTruthyWithNewKeyword);

const date = new Date('March 29, 2023');
console.log(date);