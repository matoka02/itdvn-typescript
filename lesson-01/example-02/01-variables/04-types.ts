// 1. Boolean
let isDone: boolean = false;
// isDone = 1;          // Type 'number' is not assignable to type 'boolean'.
isDone = true;
// console.log(isDone);    // true


// 2. Number
const a1_int: number = 10;
const a2_float: number = 10.1;
const a3_hex: number = 0x000a;
const a4_binary: number = 0b1010;
const a5_octal: number = 0o12;

console.log(a1_int);    // 10
console.log(a2_float);  // 10.1
console.log(a3_hex);    // 10
console.log(a4_binary); // 10
console.log(a5_octal);  // 10


// 3. String
const firstName: string = 'Ivan';
const age: number = 25;
const messageTemplate: string = `Hello, my name is ${firstName}. I am ${age} years old`;
const messageConcat: string = 'Hello, my name is ' + firstName + '. I am ' + age + ' years old';

console.log(messageTemplate);
console.log(messageConcat);


// 4. Symbol
// нужно в tsconfig.json добавить параметр "lib": ["dom", "es2015"]
const mySymbol1: Symbol = Symbol('typescript');
console.log(mySymbol1);       // Symbol(typescript)

const mySymbol2: Symbol = Symbol('typescript');
console.log(mySymbol2);       // Symbol(typescript)

console.log(mySymbol1 === mySymbol2);     // false