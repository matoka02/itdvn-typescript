function add1(x, y) {
  return x + y;
};
const result1 = add1(1, 2);
console.log(result1);       // 3

// рефакторинг
function add2(x: number, y: number): number {
  return x + y;
  // return 'hello world';     // Type 'string' is not assignable to type 'number'.
};
const result2: number = add2(10, 20);
console.log(result2);       // 30
// console.log(result2);       // undefined

// const result2: number = add2(10); // Expected 2 arguments, but got 1.
// console.log(result2);       // NaN
// const result2: number = add2(10, 'test'); // Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(result2);       // 10test
// const result2: string = add2(10, 20); // Type 'number' is not assignable to type 'string'.
// console.log(result2);       // 30