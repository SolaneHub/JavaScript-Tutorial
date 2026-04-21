/**
 * LEVEL 1: Warming Up
 * * Exercise 1
 * ? TASK: Print all values using typeof and check which is a primitive and which is an Object.
 * ! NOTE: Pay attention to the output of `typeof null`, a known quirk in JS.
 * TODO: Compare results between primitive types and object types.
 * @params 42, "42", null, undefined, 10n, Symbol("x"), [], {}
 */

console.log(typeof 42); // Number
console.log(typeof "42"); // String
console.log(typeof null); // Object
console.log(typeof undefined); // Undefined
console.log(typeof 10n); // BigInt
console.log(typeof Symbol("x")); // Symbol
console.log(typeof []); // Object
console.log(typeof {}); // Object

/**
 * * Exercise 2
 * ? TASK: Which of these variables are reassignable and which are not?
 * ! NOTE: Both `var` and `let` can be reassigned. `const` (constant) cannot.
 * TODO: Demonstrate reassignment for each type.
 */

var a = 1; 
let b = 2; 
const c = 3;

a = 10; // OK: var is reassignable
b = 20; // OK: let is reassignable
// c = 30; // Uncaught TypeError: Assignment to constant variable.

console.log("a (var):", a);
console.log("b (let):", b);
console.log("c (const):", c);