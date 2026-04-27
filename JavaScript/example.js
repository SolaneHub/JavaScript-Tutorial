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

/**
 * * Exercise 3
 * ? TASK: Predict the final value of `x` without executing the script.
 * ! NOTE: Compound assignments (+=, *=) modify the variable in-place sequentially.
 * TODO: Verify the sequence: (5 + 2) * 3 = 21.
 */

let x = 5;
x += 2;
x *= 3;
console.log(x);

/**
 * * Exercise 4
 * ? TASK: Predict the output of these comparisons.
 * ! NOTE: `==` performs type coercion, while `===` does not. `Object.is` handles `NaN` and signs of zero differently than `===`.
 * TODO: Research the "SameValue" algorithm used by `Object.is`.
 */

console.log(5 == "5"); // True
console.log(5 === "5"); // False 
console.log(Object.is(NaN, NaN)); // True
console.log(Object.is(+0, -0)); // False

/**
 * * Exercise 5
 * ? TASK: Experiment with explicit type conversion (Type Casting).
 * ! NOTE: `Number()`, `String()`, and `Boolean()` are constructor functions used for explicit conversion.
 * TODO: Analyze how different types (string, number, null) behave when converted to Boolean.
 */

let d = "10";
let e = "10.5";
let f = 0;
let g = "hello";
let h = null;

console.log(Number(d), String(d), Boolean(d));
console.log(Number(e), String(e), Boolean(e));
console.log(Number(f), String(f), Boolean(f));
console.log(Number(g), String(g), Boolean(g));
console.log(Number(h), String(h), Boolean(h));

/**
 * LEVEL 2: Coercion and Conversion
 * * Exercise 6
 * ? TASK: Predict the output of these implicit type conversions (Type Coercion).
 * ! NOTE: In JS, the `+` operator is overloaded for both addition and string concatenation. Other arithmetic operators (-, *, /) always trigger numeric conversion.
 * TODO: Compare the behavior of `+` vs `-` when one operand is a string.
 */

console.log("10" - 2);   // 8 (Numeric subtraction)
console.log("10" + 2);   // "102" (String concatenation)
console.log("5" * "3");  // 15 (Numeric multiplication)
console.log("8" / "2");  // 4 (Numeric division)

/**
 * * Exercise 7
 * ? TASK: Predict which of these values are considered "Truthy" or "Falsy".
 * ! NOTE: In JavaScript, every value has an inherent boolean value when evaluated in a logical context.
 * TODO: Experiment with `!!` (double bang) to explicitly convert values to booleans.
 */

console.log(Boolean(0));          // Falsy
console.log(Boolean(1));          // Truthy
console.log(Boolean(""));         // Falsy
console.log(Boolean(" "));        // Truthy
console.log(Boolean(null));       // Falsy
console.log(Boolean(undefined));  // Falsy
console.log(Boolean(NaN));        // Falsy
console.log(Boolean([]));         // Truthy (Empty array is an object!)
console.log(Boolean({}));         // Truthy (Empty object is an object!)

/**
 * * Exercise 8
 * ? TASK: Predict the results of these common equality comparisons.
 * ! NOTE: These are common JS interview questions regarding "Loose" vs "Strict" equality.
 * TODO: Explain why `null == undefined` is true but `null === undefined` is false.
 */

console.log(1 == true);          // true
console.log(1 === true);         // false
console.log(0 == false);         // true
console.log(0 === false);        // false
console.log("" == false);        // true
console.log("" === false);       // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

/**
 * LEVEL 3: Scoping and Blocks
 * * Exercise 9
 * ? TASK: Predict the output and understand the scoping rules for `let` and `const`.
 * ! NOTE: Both `let` and `const` have block scope, meaning they are only accessible within the block `{}` they are defined in.
 * TODO: Explain why `console.log(eta)` results in a ReferenceError and what value `nome` will have.
 */

let nome = "Anna";
if (true) {
  let nome = "Luca";
  const eta = 20;
}
console.log(nome);
// console.log(eta); // Uncaught ReferenceError: eta is not defined