// string
console.log("Texting");
// integer
console.log("123");
// boolean
console.log("true");
// Array
console.log([1,2,3,4]);
// Object literal
console.log({a:1, b:2});

console.table({a:1, b:2});

// error format
console.error('This is an error');
// warning format
console.warn('This is a warning');
// clear console
//console.clear();

//  sript timer - strings params must be the same on both time and timeEnd
console.time('timer')
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.timeEnd('timer')

// var, let, const
// start with const, use let if necessary

var name = 'Gabriel';
console.log(name);
name = 'Neves';
console.log(name);

// Init variable - used for conditionals

var greeting;
console.log(greeting);

// variables can include letters, numbers, _, $
// cannot start with number
// Multi word variables - use camelCase, PascalCase (classes and constructors) or underscore

// let can be reassigned. Also, it can be initialized
// const cannot be reassigned, nor initialized empty
// const can have its arrays or objects values changed

const person = {
  name: 'John',
  age: 30
}
console.log(person)

person.name = 'Sara';
person.age = 23;
console.log(person)

const numbers = [1,2,3,4,5];
console.log(numbers);

numbers.push(6);
console.log(numbers);

// this will not work because we are reassigning the array, not mutating it
// numbers = [1,2,3,4,5,6];
// console.log(numbers);

// DATA TYPES

// primitive & reference
// primitive is stored on the stack - string, boolean, number, etc...
// referene is a pointer to a location in memory (heap) - arrays, object literals, functions, dates, etc...

console.clear();

// primitives

const string = 'john doe';
const number = 1;
const boolean = true;
const empty = null;
const notDefined = undefined;
const symbol = Symbol();

// references

const arrays = [1,2,3,4];
const objectLit = {
  city: 'boston',
  state: 'MA'
};

const date = new Date();

console.log(typeof name);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof empty);
console.log(typeof notDefined);
console.log(typeof symbol);
console.log(typeof arrays);
console.log(typeof objectLit);
console.log(typeof date);

console.clear();

// Type Conversion

let val;

// num to string

val = String(555);
val = String(4+4);
val = String(true);
val = String(new Date());
val = String([1,2,3,4,5]);

val = (5).toString();
val = (true).toString();

val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100');
val = parseFloat('100.30');



console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

// type cohersion
// JS automatically converts the 6 to a string to allow the operation.

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

console.clear();

const num1 = 100;
const num2 = 50;
let value;

value = num1 + num2;
value = num1 - num2;
value = num1 * num2;
value = num1 / num2;
value = num1 % num2;

// Math Object - objects have properties AND methods (functions)

value = Math.PI;
value = Math.E;
value = Math.round(2.4);
value = Math.ceil(2.4);
value = Math.floor(2.8);
value = Math.sqrt(64);
value = Math.abs(-3);
value = Math.pow(8, 2); //pow = power of something
value = Math.min(2,3,4,5); //return the minimum number value
value = Math.max(2,3,4,5); //return the max number value
value = Math.random();
value = Math.random() * 20 + 1;
value = Math.floor(Math.random() * 20 + 1);

console.log(value);

console.clear();