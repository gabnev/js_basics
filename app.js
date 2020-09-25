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

// document.body.innerHTML = html;

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

// Dates & Time

let value4;

const today = new Date();
let birthday = new Date('12-12-1984 10:04:00');
birthday = new Date('December 12 1984');
birthday = new Date('12/12/1984');

value4 = today.toString();
value4 = today;
value4 = birthday;
value4 = today.getMonth();
value4 = today.getDate();
value4 = today.getDay(); //day of week
value4 = today.getFullYear();
value4 = today.getHours();
value4 = today.getMinutes();
value4 = today.getSeconds();
value4 = today.getMilliseconds();
value4 = today.getTime(); // time passed since january 1st 1970


console.log(value4);
console.log(typeof value4);

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1986);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(35);

console.log(birthday);

console.clear();

// if statements & comparison

// if(something){
//   do something;
// } else {
//   do something else;
// }

const id = '20';

if(id == 21){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

if(id != 21){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// check the type as well - triple equals

if(id === 21){
  console.log('Correct');
} else {
  console.log('Incorrect');
}

if(id !== 21){
  console.log('Correct');
} else {
  console.log('Incorrect');
}



if(id){
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// checking if undefined

if(typeof id2 !== 'undefined'){
  console.log(`The ID is ${id2}`);
} else {
  console.log('No ID');
}

// Greater or less than
if(id > 200){
  console.log('correct');
} else {
  console.log('correct');
}

// Else If

const color = 'blue';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue') {
  console.log('color is blue');
} else {
  console.log('Color is not red or blue');
}

// logical operators
const nickname = "Steve";
const years = "16";

if(years > 0 && years < 12){
  console.log(`${nickname} is a child`);
} else if(years >= 13 && years <19){
  console.log(`${nickname} is a teenager`);
} else {
  console.log(`${nickname} is an adult`);
}

if(years < 16 || years > 65){
  console.log(`${nickname} cannot run in race`);
}  else {
  console.log(`${nickname} is registered for the race`);
}

// ternary
console.log(id === '20' ? 'correct' : 'incorrect');

console.clear();

// Switches - useful when there are a lot of cases and you don't want to use else if

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  case 'yellow':
    console.log('Color is yellow');
    break;
    default:
      console.log('Color is not red, blue nor yellow');
      break;
} 

let day;

switch (new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(day);
console.clear();

// Functions

// declarations


// default value ES5

function greetES5(firstName, lastName){
  // console.log('Hello');
  if(typeof firstName === 'undefined'){firstName = 'John'}
  if(typeof lastName === 'undefined'){lastName = 'Doe'}
  return 'Hello' + ' ' + firstName + ' ' + lastName;
}

console.log(greetES5('Steve', 'Smith'));

// default value ES6

function greetES6(firstName = 'John', lastName = 'Doe'){
  // console.log('Hello');
  return 'Hello' + ' ' + firstName + ' '+ lastName;
}

console.log(greetES6('Steve', 'Smith'));

// function expressions - normally used an anonymous function as the value of a variable

const square = function(x){
  return x * x;
};

console.log(square(8));

// IMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
  console.log('IIFE Ran . . .');
})();

(function(name){
  console.log('Hello' + ' ' + name);
})('Brad');

// Property method

const todo = {
  add: () => {
    console.log('Add todo . . .');
  },
  edit: (id) => {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = () => {
  console.log('Delete todo . . .')
}

todo.add();
todo.edit(22);
todo.delete();

console.clear();

// iterators
// for loop - mostly used when you know the NUMBER of repetitions

for(let i = 0; i <= 10; i++){
  console.log('Number ' + i);
}

// continue - used to skip to the next iteration
// break - gets out of the loop

for(let i = 0; i <= 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }

  if(i === 8){
    console.log('Stop the loop');
    break;
  }

  console.log('Number ' + i);
}

// while loop - mostly used when you DON'T know the NUMBER of repetitions

let i = 0;

while(i < 10){
  console.log('While Number ' + i);
  i++;
}

// Do While Loop - will always run at least once

let x = 0;

do {
  console.log('Do While Number ' + x);
  x++;
}

while(x < 10);

const cars = ['suzuki', 'honda', 'toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// for each

cars.forEach((car) => {
  console.log(car);
});

cars.forEach((car, index, array) => {
  console.log(`${car}: ${index}`);
  console.log(array);
});

// map - return a different array

const users = [
  {id:1, name: 'John'},
  {id:2, name: 'Sara'},
  {id:3, name: 'Alex'}
]

const ids = users.map((user) => {
  return user.id;
});

console.log(ids);


// for in loop

const pilot = {
  firstName: "John",
  lastName: 'Doe',
  age: 40
}

for(let x in pilot){
  console.log(`${x} : ${pilot[x]}`);
}

console.clear();

// window object methods & properties

// const input = prompt();
// alert(input);

// if(confirm('Are you sure?')){
//   console.log('Yes');
// } else {
//   console.log('No');
// }

let value5;

//outter height width
value5 = window.outerHeight;
value5 = window.outerWidth;

//inner height width
value5 = window.innerHeight;
value5 = window.innerWidth;

//scroll points
value5 = window.scrollY;
value5 = window.scrollX;

//location object
value5 = window.location;
value5 = window.location.hostname;
value5 = window.location.port;
value5 = window.location.href;
value5 = window.location.search;

//redirect
// window.location.href = 'http://www.google.com';

//reload
// window.location.reload();

// history object
// window.history.go(-1);
// window.history.length;

//Navigator
value5 = window.navigator;
value5 = window.navigator.appVersion;
value5 = window.navigator.userAgent;
value5 = window.navigator.platform;
value5 = window.navigator.vendor;
value5 = window.navigator.language;

console.log(value5);

console.clear();

// block scopes

//var is bad because it allows changing global variables if repeated inside blocks

var a = 1;
let b = 2;
const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true){
//   var a = 7;
//   let b = 8;
//   const c = 9;
//   console.log('If Scope: ', a, b, c);
// }

for(let a = 0; a < 10; a++){
  console.log(`loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
