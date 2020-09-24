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

const firstName = 'William';
const lastName = 'Johnson';
const age = 35;
let value1;

value1 = firstName + ' ' + lastName;

//apend

value1 = 'Gabriel ';
value1 += 'Neves';
value1 = 'Hello, my name is ' + firstName + ' and I am ' + age;
const str = 'Hello there, I am here!';
const tags = 'web design, power overwhelming, pizza';

// escaping
value1 = 'that\'s awesome, I can\'t wait';

// length - is a property, it does NOT need a (), only methods needs it
value1 = firstName.length;

// concat - method
value1 = firstName.concat(' ', lastName);


// toUpperCase & toLowerCase - method
value1 = firstName.toUpperCase();
value1 = firstName.toLowerCase();

value1 = firstName[0];
value1 = firstName[0].toLowerCase();

// indexOf() - returns index position of string
value1 = firstName.indexOf('l');
value1 = firstName.lastIndexOf('l');

// chartAt() - returns string at index position
value1 = firstName.charAt('2');

//get last char
value1 = firstName.charAt(firstName.length - 1);

// substring
value1 = firstName.substring(0, 4);

//slice()
value1 = firstName.slice(0, 4);
value1 = firstName.slice(-3);

//split()
value1 = str.split(' ');
value1 = tags.split(',');

//replace
value1 = str.replace('there', 'here');

//includes()
value1 = str.includes('Hello');

console.log(value1);

console.clear();

// template literals ES6

const nome = 'John';
const idade = '30';
const trabalho = 'web developer';
const cidade = 'lisboa';
let html;

// without template string (es5)

html = '<ul><li>Name: ' + nome + '</li><li>Age: ' + idade + '</li><li>Job: ' + trabalho + '</li><li>City: ' + cidade + '</li></ul>';

// with template string / literal (es6)

function hello(){
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${nome}</li>
    <li>Age: ${idade}</li>
    <li>Job: ${trabalho}</li>
    <li>City: ${cidade}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// Arrays
const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = new Array(11,12,13,14,15,16,17,18,19,20);
const fruit = ['banana', 'apple', 'pearl'];
const mixed = [22, 'hello', 'true', undefined, null, {a: 1, b: 2}]

let value2;

// array length
value2 = arr.length;

// if array
value2 = Array.isArray(arr);

// get single value
value2 = arr[0];
value2 = arr[3];

// insert into array
arr[2] = 100;

// find index of value
value2 = arr.indexOf(2);

//mutating
//add to end
arr.push(250);
//add to front
arr.unshift(120);
// take off from end
arr.pop();
// take off from front
arr.shift();
// splice values
// arr.splice(1, 3);
// reverse array
arr.reverse();
// concat array
value2 = arr.concat(arr2);
//sort array
value2 = fruit.sort();
//compare function
value2 = arr.sort(function(x, y) {
  return x - y;
})

// value2 = arr.sort(function(x,y) {
//   return y - x;
// })

// find
function under50(num) {
  return num < 50;
}

function over50(num) {
  return num > 50;
}

value2 = arr.find(under50);
value2 = arr.find(over50);

console.log(arr);
console.log(value2);

console.clear();

// object literals

const ship = {
  type: 'combat',
  price: 1000,
  serviceTime: 30,
  brand: 'drake',
  size: 'medium',
  role: ['trade', 'combat'],
  components: {
    shield: 'size 2',
    powerplant: 'size 2'
  },
  getAge: function(){
    return 2020 - this.serviceTime;
  }
}

let value3;

value3 = ship;

value3 = ship.type;
value3 = ship['type'];
value3 = ship.brand;
value3 = ship.role[1];
value3 = ship.components.shield;
value3 = ship.components['shield'];
value3 = ship.getAge();

console.log(value3);

const ships = [
  {name: 'cutlass', age: 30},
  {name: 'caterpillar', age: 120}
];

for(let i = 0; i < ships.length; i++){
  console.log(ships[i].name);
}

console.clear();