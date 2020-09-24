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
numbers = [1,2,3,4,5,6];
console.log(numbers);
